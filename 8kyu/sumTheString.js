/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

*/

function sumStr(a,b) {
    // check if A isn't an empty string
    if (a === ''){
      a += '0'
    }
    // check if B isn't an empty string
    if(b === ''){
      b += '0'
    } 
    // convert both to intergers and combine them
    let ans = parseInt(a) + parseInt(b)
    // return answer back as a string. 
    return ans.toString()
  }