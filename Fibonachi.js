

function fibo(n){
    if(n <=0) return []
    if(n === 1) return [1]

    let result = [0,1]
    let start = 0; 
    let curr = 1; 

    for(let i =2; i<n; i++){
        let temp = start + curr; 
        start = curr; 
        curr = temp; 
        result.push(curr)
    }
    return result;
}