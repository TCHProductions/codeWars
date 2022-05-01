/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

function XO(str) {
    let string = str.toLowerCase().split("")  
    let exes = 0
    let ohs = 0
    console.log(string)
    for(let i = 0; i < string.length; i++){
      if (string[i] === 'o'){
        ohs += 1
      }
      else if(string[i] === 'x'){
        exes += 1
      }
    }
    return exes - ohs === 0 ? true : false
  }