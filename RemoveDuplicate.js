// We have to remove the duplicate in array  


function removeDuplicate(arr){
    let result = []; 

    for(let i =0; i<arr.length; i++){
        if(result.indexOf(arr[i]) == -1){
            result.push(arr[i])
        }
    }
    return result; 
}



const remove = removeDuplicate([1,1,2,2,3,3,4,4,5,5,false, false]) 
console.log(remove);
