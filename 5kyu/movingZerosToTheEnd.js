/*function moveZeros(arr) {
  let catchall = []
  let zeros = []
  for (let i = 0; i < arr.length; i++){
    arr[i] === 0? zeros.push(arr[i]) : catchall.push(arr[i]) 
  }
  return [...catchall,...zeros]
}*/


function moveZeros(arr) {
    let catchall = []
    let zeros = []
    for (let i = 0; i < arr.length; i++){
      arr[i] === 0? zeros.push(arr[i]) : catchall.push(arr[i]) 
    }
    return [...catchall,...zeros]
  }