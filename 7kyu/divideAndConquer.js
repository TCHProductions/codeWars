/*Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

*/


function divCon(x){
    function getSum(total, num) {
    return total + Math.round(num);
  }
    let str = []
    let int = []
    for(let i = 0; i < x.length; i++){
      if(typeof (x[i]) == 'string'){
        str.push(parseInt(x[i]))
      }
      else{
        int.push(x[i])
      }
    }
    console.log(str)
    console.log(int)
    return  int.reduce(getSum, 0) -str.reduce(getSum, 0)
    }