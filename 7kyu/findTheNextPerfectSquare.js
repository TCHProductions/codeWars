/*Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.*/

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    // Check if the number input can be square rooted by checking if it equals a whole number or a rounded number. 
    if(Math.sqrt(sq) === Math.round(Math.sqrt(sq))){
    // function to square the number then add one.
      let square = Math.sqrt(sq) + 1
      //square rooting the previous number. 
      return Math.pow(square, 2)
    }
    else{
        // returning -1 if it failes the rounded number check. 
      return -1
    }
  }

