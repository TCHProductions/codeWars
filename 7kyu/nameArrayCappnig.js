/*Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']*/


function capMe(names) {
    return names.map(value=>value.slice(0,1).toUpperCase()+value.toLowerCase().slice(1))
    }