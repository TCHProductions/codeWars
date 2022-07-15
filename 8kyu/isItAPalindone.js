/*Write a function that checks if a given string (case insensitive) is a palindrome.*/

function isPalindrome(x) {
    // your code here
    let cou = 0
    for(let i = 0; i < x.length; i++){
      if(x.toLowerCase()[i] === x.toLowerCase()[x.length - i -1])
        cou += 1
    }
    return cou === x.length ? true : false
  }