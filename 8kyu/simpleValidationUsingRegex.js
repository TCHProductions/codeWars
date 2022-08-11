/*Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).*/

function validateUsr(username) {
    let dictionary = 'abcdefghijklmnopqrstuvwxyz1234567890_'
    
    if(username.length < 4 || username.length > 16){
          console.log('a')
      return false
    }
    if(username.toLowerCase() === username == false){
      console.log('b')
      return false
    }
    for(let i = 0; i < username.length; i++){
      console.log('c')
      if(dictionary.includes(username[i]) == false){
         return false
         }
    }
    return true
  }