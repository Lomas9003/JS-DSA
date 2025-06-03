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

function secondLargest(arr){
    let val = [...new Set(arr)] 
    
    val.sort((a,b)=>b-a)
    return val[1]
  

}



console.log(secondLargest([10, 20, 4, 45, 99]))