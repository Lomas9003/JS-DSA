function flatten(arr) {
  let result = [];


  for(let i =0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      let flat = flatten(arr[i])
      result.push(...flat)
    }else{
      result.push(arr[i])
    }
  }
}

  const arr = [[1, 2], 4, [5, 6, [7, 8]]];
  console.log(flatten(arr)); // Output: [1, 2, 4, 5, 6, 7, 8]







// flaten the nested array 
function flattenArray(arr){
    let stack = [...arr]
    let result = [] 

    while(stack.length){
        let next = stack.pop()

        if(Array.isArray(next)){
            stack.push(...next)
        }else {
            result.push(next)
        }
    }
    return result.reverse()
}


console.log(flattenArray([1, [2, [3, [4, 5]]]])); 