/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/

function between(a, b) {
    // your code here
    // empty array for answer
    let ans = []
    // for Loop opening, A is the start and the end is B + 1. Each cycle of loop adds a number to the empty array
    for(let i = a; a < b + 1; a++){
      ans.push(a)
    }
    // return empty array
    return ans
  }