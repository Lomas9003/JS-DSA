function chunkArray(arr, n) {
    // Your implementation 
    let result = []

    for (let i = 0; i < arr.length; i = i + n){
        let chunks = []

        for (let j = 0; j < n && (i + j) < arr.length; j++)
        {
            chunks.push(arr[i+j])
        }
        result.push(chunks)
    } 
    return result
}


// find pair 


function findPairs(input1 , input2){
    let result = []
    let val = new Set()
    
    for(let i =0 ;i<input1.length; i++){
        let val2 = input2 - input1[i]
        if(val.has(val2)){
            result.push([val2 , input1[i]])
        }
        val.add(input1[i])
    }
    return result 
}



let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input2 = 10;

let output = findPairs(input1, input2);
console.log(output); //[ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]