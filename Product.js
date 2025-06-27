function productOfNextTwo(arr){
  let result = []

  for(let i =0; i<arr.length; i++){

    let next1 = arr[(i + 1) % arr.length]
    let next2 = arr[(i + 2) % arr.length]

    result.push(next1 * next2)
  }
  return result
}

const inputArray1 = [3, 4, 5];
const outputArray = productOfNextTwo(inputArray1);
console.log(outputArray);
