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

// advance memoized 

function memoize(fn) {
    // write code here 
    let cache = new Map()

    return function (...args) {
        const key = args.map((arg) => {
            if (typeof arg === 'object' && arg !== null) {
                return JSON.stringify(Object.entries(arg).sort());
            }
            return JSON.stringify(arg)
        }).join('|')

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args)
        cache.set(key, result)
        return result
    }
}

function sub(a ,b){
    return a - b
}

const memoizeSub = memoize(sub)
memoizeSub(3,2)
