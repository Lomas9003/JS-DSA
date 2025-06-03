
//function called once only

function add(a , b) {
    console.log("function called")
    return a + b;
}




function once(fn){
    let called = false; 
    let result ; 
    
    return function(...args){
        if(!called){
            try{
                result = fn.apply(this , args)
            called = true
            }catch(error){
                throw error
            }
            
        }
        return result 
    }
}


let val = once(add)
console.log(val(2, 3))
console.log(val(2, 3))
console.log(val(2, 3))
console.log(val(3, 3)) // it will not execute because the function will only run once because of flag
// console.log(add(3 , 5))