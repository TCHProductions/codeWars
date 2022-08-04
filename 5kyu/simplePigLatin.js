
  //Code here
  // Parameters - A string with a varying number of words may have punction marks 
  // Result - A String of One of Multiple Words seperated by spaces with 'ay' appended to end of each word unless that word is a punctuaion mark
  // Examples - (pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
  // PSEUDOCode - Split string into two parts. First Letter and Rest of string. reverse order and than concatinate them back together. Check if word is actually a punctuation mark and if it is NOT, then add "ay" to the end. Concatenate the individual words back into a single string and return. 
  
  // push,slice, charCodeAt, split, join, map. 
  
  function pigIt(string) {
    let marks = ['.', '!', '?','"', ',']
    result = string.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay'))
    console.log(result)
  return result.join(' ')
}