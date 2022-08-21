/*There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"*/


function correctPolishLetters (string) {
    // your code
    let empStr= ''
    for(let i = 0; i < string.length; i++){
      if(string[i] == 'ą'){
        empStr += 'a'
      }
      else if(string[i] == 'ć'){
        empStr += 'c'
      }
          else if(string[i] == 'ę'){
        empStr += 'e'
      }
          else if(string[i] == 'ł'){
        empStr += 'l'
      }
          else if(string[i] == 'ń'){
        empStr += 'n'
      }
          else if(string[i] == 'ó'){
        empStr += 'o'
      }
          else if(string[i] == 'ś'){
        empStr += 's'
      }
          else if(string[i] == 'ź'){
        empStr += 'z'
      }
          else if(string[i] == 'ż'){
        empStr += 'z'
      }
      else{
        empStr += string[i]
      }
    }
    return empStr
  }