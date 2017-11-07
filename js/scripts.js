var vowels = ["a", "e", "i", "o", "u"];


var pigLatinVowel = function(word) {
  return word + "way";
};

var multipleConsonants = function(word) {
  var consonants = [];
  var letters = word.split("");
  var i = 0;
  while(!(vowels.includes(letters[i]))) {
    consonants.push(letters[i]);
    letters.shift();
    i++;
  };
  return consonants;
};

var pigLatinConsonant = function(word) {
  var characterArray = word.split("");
  characterArray.push(characterArray[0]);
  characterArray.shift();
  var newWord = characterArray.join("");
  return newWord + "ay";
};

var pigLatin = function(word) {
  if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o" || word.charAt(0) === "u") {
    return pigLatinVowel(word);
  } else {
    return pigLatinConsonant(word);
  }
};

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = pigLatin(input);
    console.log(multipleConsonants(input));


    $("#result").text(result);
    $("#result").show();
  });
});
