

function fibo(n){
    let a = 0;
    let b = 1;
    let count = 0;

    while(count < n){
        console.log(a)
        let temp = a + b;
        a = b;
        b= temp;
        count++
    }

}