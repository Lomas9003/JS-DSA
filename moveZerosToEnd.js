//  we have to move all zero to the end 

function move(arr){
   let x = 0; 
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            arr[x] = arr[i]
            x++
        }
    }
    // to make all the remaing value zero 

    for(let i = x;i<arr.length; i++){
        arr[i] = 0;
    }
    return arr
}
move() 

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function moveZerosToStart(arr){
    let x = arr.length - 1; 
    for(let i = arr.length -1 ; i>=0; i--){
        if(arr[i] !== 0){
            arr[x] = arr[i]
            x--
        }
    }
    for(let i = 0 ;i<=x; i++){
        arr[i] = 0
    }
    return arr
}

let arr1 = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
let val1 = moveZerosToStart(arr1);
console.log(val1);



function moveZerosToEnd(arr){
        let count = 0; 

        for(let i = 0; i<arr.length; i++){
            if(arr[i] != 0) {
                if(i != count){
                    [arr[count] , arr[i]] = [arr[i] , arr[count]]
                }
                count++;
            }
        }
        return arr

}

let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0];
let val = moveZerosToEnd(arr);
console.log(val);