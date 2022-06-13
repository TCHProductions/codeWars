/*Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".*/


function bump(x){
    // split it into a array
    let spl = x.split('')
    // Have an empty counter
    let count = 0
    // Cycle through For Loop where i is less than the string length
    for (let i = 0; i < x.length; i++){
        // If string equals 'n' add one to count.
      if(spl[i] === 'n'){
        count += 1
      }
    }
    // conditional that returns a message based on the count. 
   if(count < 15){
     return "Woohoo!"
   }
   else{
     return "Car Dead"
       }
 }