
function selectionSortDescending(arr){
    let result = []

    for(let i =0 ; i<arr.length; i++){
        let maxIndex = i 

        for(let j=i+1 ; j<arr.length; j++){
            if(arr[j]> arr[maxIndex]){
                maxIndex = j
            }
        }

        if(maxIndex !== i){
            let temp = arr[i];
             arr[i] = arr[maxIndex] 
            arr[maxIndex] = temp
        }
    }
    return arr
}



const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = selectionSortDescending(numbers);
console.log(sortedNumbers);