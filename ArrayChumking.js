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