var vowels = "aeiouAEIOU";
var numbers = "1234567890"

//runs if word starts with a vowel
var pigLatinVowel = function(word) {
  return word + "way";
};

// var pigLatinConsonant = function(word) {
//   var characterArray = word.split("");
//   characterArray.push(characterArray[0]);
//   characterArray.shift();
//   var newWord = characterArray.join("");
//   return newWord + "ay";
// };

//runs if word starts with a consonant
var pigLatinConsonant = function(word) {
  var consonants = "";
  while(!(vowels.includes(word.charAt(0)))) {
    consonants = consonants + word.charAt(0);
    word = word.substr(1);
  }; //while first letter is not a vowel, add first letter to the string 'consonants' and remove it from the word
  var newWord = word+consonants+"ay";
  return newWord;
};

//runs if word starts with "qu"
var pigLatinQu = function(word) {
  word = word.substr(2)+"quay";
  return word;
};

var pigLatin = function(word) {
  if (vowels.includes(word.charAt(0))) {
    return pigLatinVowel(word);
  } else if (word.substr(0,2) === "qu"){
    return pigLatinQu(word);
  } else {
    return pigLatinConsonant(word);
  }
};

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    debugger;
    event.preventDefault();
    var input = $("#input").val();
    var result = pigLatin(input);

    $("#result").text(result);
    $("#result").show();
  });
});
