/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.*/


function findLongest(array){
    // code here
    let empty = 0
    // I'll need a loop to go through the array
    for(let i = 0; i < array.length; i++){
      if(array[i].toString().length > empty.toString().length){
        empty = array[i]
      }
    }
    return parseInt(empty)
    // Compare the current array to the previous one. 
    
  }