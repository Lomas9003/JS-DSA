//  In this we have to find the second largest in array 

function second(arr){
    if(arr.length < 2) return null;  

    let first = -Infinity
    let second = -Infinity; 
    for(let num of arr){
        if(num > first){
            second = first; 
            first = num
        }else if (num > second && num < first){
            second = num
        }
    }
    return second === -Infinity ? null : second
}

let arr1 = [2,5,3,11,11,10]
console.log(second(arr1))

function secondLargest(arr){
    let val = [...new Set(arr)] 
    
    val.sort((a,b)=>b-a)
    return val[1]
  

}



console.log(secondLargest([10, 20, 4, 45, 99]))