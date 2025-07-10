function removeDuplicate(arr){
    let unique = []

    for(let i = 0; i<arr.length ; i++){
        if(unique.indexOf(arr[i]) == -1){
            unique.push(arr[i])
        }
    }
}
const remove = removeDuplicate([1,1,2,2,3,3,4,4,5,5,false, false])
// console.log(remove);


// without index of 

function removeDuplicate(arr){
    let result = {}
    let val = []
    
    for(let i =0; i<arr.length ; i++){
        if(!result[arr[i]]){
            val.push(arr[i])
            result[arr[i]] = true
        }
    }
    return val
}




// const remove = removeDuplicate([1,1,2,2,3,3,4,4,5,5,false, false])
// console.log(remove);


// if we want the count of uniqe elements in an array 

function uniqe(){
    let x = 0

    for(let i =0; i<arr.length; i++){
        if(arr[i] > arr[x]){
            x = x + 1
            arr[x] = arr[i]
        }
    }
}