function findMaxConsecutiveOnes(arr){
    let count = 0; 
    let MaxCount = 0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 1){
            count++
            if(MaxCount<count){
                MaxCount = count
            }
        }else{
            count = 0;
        }
    }
    return MaxCount
}



console.log(findMaxConsecutiveOnes([1, 1, 9, 1, 9, 9, 19, 7, 1, 1, 1, 3, 2, 5]))