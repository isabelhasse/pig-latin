var pigLatin = function(word) {
  var characterArray = word.split("");
  characterArray.push(characterArray[0]);
  characterArray.shift();
  var newWord = characterArray.join("");
  return newWord + "ay";
};


$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();

    var result = pigLatin(input);

    $("#result").text(result);
    $("#result").show();
  });
});
