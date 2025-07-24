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


var twoSum = function(nums, target) 
{
    let map = {}
    let arr = []
    for(let i =0; i<nums.length; i++){
        map[nums[i]] = i;
    }
    
    for(let j =0; j<nums.length; j++){
        let pair = target - nums[j]
        if(map[pair] && map[pair] != j){
            arr.push([nums[j] , pair])
        }
    }
    return arr
};

// let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let input2 = 10;
// console.log(twoSum(input1 , input2))
 // o/p -[
//   [ 1, 9 ], [ 2, 8 ],
//   [ 3, 7 ], [ 4, 6 ],
//   [ 6, 4 ], [ 7, 3 ],
//   [ 8, 2 ]
// ]

// brute forece approch
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