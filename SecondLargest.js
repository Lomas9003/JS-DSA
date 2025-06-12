//  In this we have to find the second largest in array 

function second(arr){

    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for(let i =0 ; i< arr.length; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        }else if(arr[i]> secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest

}

let arr1 = [2,5,3,11,11,10]
console.log(second(arr1))

