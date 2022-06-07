/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'*/

function removeDuplicateWords (s) {
    // your perfect code...
     let spl = s.split(' ')
     let fil = spl.filter(function(item, pos, self){
       return self.indexOf(item) == pos;
     })
     return fil.join(' ')
    }