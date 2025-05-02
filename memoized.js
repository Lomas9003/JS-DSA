function sum1(){ 
    let cache = {}
    return function (a , b){  
        let key = `${a},${b}` 
        if(!cache[key]){ 
            console.log("foooo");
            
            cache[key] = a + b; 
            return cache[key]
        } else {
           return cache[key]
        }   
      
    }

}