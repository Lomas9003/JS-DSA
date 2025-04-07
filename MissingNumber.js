

// find a missing number in sequence 

function missingNumber(arr){
    let result =  ""; 
    arr = arr.sort((a , b) => a - b)
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i + 1] - arr[i] === 2){
          return  result = arr[i] + 1; 
        }
    }
return 0; 
}


// const arr = [1,2,3,4,6,7,8];
// const arr =  [1,3,0]
// const arr =  [3,0,4,2,1]
// const arr =  [1]
console.log(missingNumber(arr))