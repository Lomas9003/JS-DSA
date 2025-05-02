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
