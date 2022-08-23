/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.*/


function isVow(a){
    //097 101 105 111 117
      let empArr = []
      for(let i = 0; i < a.length; i++){
        if(a[i] == 097){empArr.push('a')}
        else if(a[i] == 101){empArr.push('e')}
        else if(a[i] == 105){empArr.push('i')}
        else if(a[i] == 111){empArr.push('o')}
        else if(a[i] == 117){empArr.push('u')}
        else{empArr.push(a[i])}
      }
      return empArr
    }