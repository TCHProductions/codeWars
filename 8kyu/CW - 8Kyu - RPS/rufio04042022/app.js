https://www.codewars.com/kata/57f781872e3d8ca2a000007e

//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]

//Para: Is it always going to be intergers? are we going to be given any special characters? an empty arr ever?

//Ret: This should return a new array with each value doubled
//E: If we are given [2,3,4], should return [4,6,8]
// if we are given [4,5,6], should return [8,10,12]
// if we are given [2,22], should return [4,44]
//P: 
//Make a function that takes in an array
function doubled(arr){
    arr.map(e=>e*2)
}
//map through the array and multiply each element by 2. Also return. 
console.log(doubled([1,2,3,4,5]))


