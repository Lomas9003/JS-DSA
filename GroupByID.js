function groupBy(arr, key) {
    // Your implementation
    
    let result = {}
    
    for(let item of arr){
      let keyValue = item[key]
      if(!result.hasOwnProperty(keyValue)){
        result[keyValue] = []
          
      }
      result[keyValue].push(item)
    }
    return result 
}





// o/p 
// {
//   '25': [ { name: 'Ishan', age: 25 }, { name: 'lomas', age: 25 } ],
//   '30': [ { name: 'ravi', age: 30 } ]
// }
