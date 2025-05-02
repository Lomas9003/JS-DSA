function productOfNextTwo(arr){
    let result = []; 

    for(let i = 0; i< arr.length ; i++){
        if(i < arr.length - 1){
            result.push(arr[i + 1] * arr[i + 2])
        }else{
            result.push(arr[0] * arr[1] )
        }
    }
}

const inputArray1 = [3, 4, 5];
const outputArray = productOfNextTwo(inputArray1);
console.log(outputArray);
