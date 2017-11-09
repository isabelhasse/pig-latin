var vowels = ["a", "e", "i", "o", "u"];


var pigLatinVowel = function(word) {
  return word + "way";
};

var pigLatinConsonant = function(word) {
  var consonants = [];
  var letters = word.split("");
  while(!(vowels.includes(letters[0]))) {
    consonants.push(letters[0]);
    letters.shift();
  };
  var newWord = letters.join("")+consonants.join("")+"ay";
  return newWord;
};

var pigLatin = function(word) {
  if (vowels.includes(word.charAt(0))) {
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
