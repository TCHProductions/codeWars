/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)*/

function getSum( a,b )
{
    // decide which number is the largest, a or b. 
  let max = Math.max(a ,b)
  // decide which number is the smallest, a or b
  let current = Math.min(a, b)
  // start of the sum total that will be returned
  let total = current
  // for loop that begins from the smallest number and goes up to the largest number.
  for(let i = current; i < max; i++){
      // adding i, which is the number between, to the total sum. Adding +1 to negate current - current occuring.
    total += i + 1
  }
  // return total
  return total
}