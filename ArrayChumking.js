function chunkArray(arr, n) {
    // Your implementation 
    let result = []

    for (let i = 0; i < arr.length; i = i + n){
        let chunks = []

        for (let j = 0; j < n && (i + j) < arr.length; j++)
        {
            chunks.push(arr[i+j])
        }
        result.push(chunks)
    } 
    return result
}

// i/p
// let arr = [1,2,3,4,5,6,7]
// let n = 2
//o/p = [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

// find pair 


function findPairs(input1 , input2){
    let result = []
    let val = new Set()
    
    for(let i =0 ;i<input1.length; i++){
        let val2 = input2 - input1[i]
        if(val.has(val2)){
            result.push([val2 , input1[i]])
        }
        val.add(input1[i])
    }
    return result 
}



let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input2 = 10;

let output = findPairs(input1, input2);
console.log(output); //[ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]

// if we want the indexses

function findIndex(input1 , input2){
    let result = []
    let val = new Map()

    for(let i =0; i<input1.length; i++){
        let val2 = input2 - input1[i]

        if(val.has(val2)){
            // return [val.get(val2) , i]

            result.push([val.get(val2) , i])

        }
        val.set(input1[i] , i)
    }

    return result

}

// let input1 = [1,3,10,11,14 ,12];
// let input2 = 13;

// let val = findIndex(input1 , input2)
// console.log(val)
// output/p - [ [ 1, 2 ], [ 0, 5 ] ]



function chunk(arr, n) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}

// let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let input2 = 10;

console.log(chunk(input1, input2));
