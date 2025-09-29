

function isPrime(num){
    if(num<=1) return false; 
    if(num === 2)return true;
    if(num % 2 === 0) return false;
    
    for(let i =3 ; i<num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(15))