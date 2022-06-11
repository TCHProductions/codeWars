/*Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"*/

var greet = function(name) {

    // Split the string into an Array making every character lowercase by default. 
    let string = name.toLowerCase().split('')
    // Take the first item in the string and turn it into it's own container and make it capital
    let capital = name[0].toUpperCase()
    // remove the first item of the string
    string.shift()
    // Add the new capital to the start of the string
    string.unshift(capital)
    // join the string together
    let fin = string.join('')
    // return answer 
    return `Hello ${fin}!`
  };