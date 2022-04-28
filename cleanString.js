/*Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.*/

function stringClean(s){
    // Empty String container
    let noNumbers = ''
    // For loop to cycle through each index of the string
    for(let i = 0; i < s.length; i++){
        // conditional statement. If String = a number, add a empty string to the empty container
      if (s[i] === '0' || s[i] === '1' || s[i] === '2' || s[i] === '3' || s[i] === '4' || s[i] === '5' || s[i] === '6' || s[i] === '7' || s[i] === '8' || s[i] === '9'){
        noNumbers += ''
      }
      else{
          // else add the string index to the empty container
        noNumbers += s[i]
      }
    }
    // return new string
return noNumbers
}