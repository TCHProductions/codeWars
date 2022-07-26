/*Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
      */

      function drawStairs(n) {
        // your code here
        let emp = ''
        for(let i = 0; i < n -1; i++){
          emp += 'I\n '
          for(let x = 0; x < i; x++){
            emp += ' '
          }
        }
        
        return emp += 'I'
      }