/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/


function longest(s1, s2) {
    // your code
    let combined = s1 + s2
    let splited = combined.split('').sort()
    let empStr = ''
    for(let i = 0; i < combined.length; i++){
      if(empStr.includes(splited[i]) === false){
          empStr += splited[i]
      }else{
        console.log('no')
      }
    }
    return empStr
  }