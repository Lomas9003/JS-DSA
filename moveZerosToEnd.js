//  we have to move all zero to the end 

function moveZerosToEnd(arr){
    let count = 0; 

    for(let i = 0; i<arr.length; i++){
        if(arr[i] != 0){
             if(i != count){
                [arr[count] , arr[i]] = [arr[i] , arr[count]]
             }
             count++
        }
    }
    return arr
}

let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
let val = moveZerosToEnd(arr);
console.log(val);