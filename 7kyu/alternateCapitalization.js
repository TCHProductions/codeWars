/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!*/

function capitalize(s){
    let odd = []
    let even = []
    let ans = []
    for(let i = 0; i < s.length; i++){
      if(i % 2 === 0){
        odd.push(s[i].toUpperCase())
        even.push(s[i])
      }
      else{
        odd.push(s[i])
        even.push(s[i].toUpperCase())
      }
    }
    ans.push(odd.join(''))
    ans.push(even.join(''))
    
    return ans
  };