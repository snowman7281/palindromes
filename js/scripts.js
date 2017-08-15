$(document).ready(function(){
  $("#palindromeForm").submit(function(event){
    event.preventDefault();

    var wordInput = $("#word").val();

    function reverseString(str){
      var splitString = str.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
    };

    if(wordInput == reverseString(wordInput)){
      $("#palindrome").show();
    }else{
      $("#notPalindrome").show();
    }

  });
});
