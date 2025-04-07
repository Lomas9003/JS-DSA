//  In this we have to find the second largest in array 

function secondLargest(arr){
    let val = [...new Set(arr)] 
    
    val.sort((a,b)=>b-a)
    return val[1]
  

}



console.log(secondLargest([10, 20, 4, 45, 99]))