//Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

// Reusability → Create specialized functions from general ones.

// Avoid repeating arguments when some parameters are fixed.

// Improves code readability in functional programming.

// Works great in partial application.

function curry(fn){
    
    return function curried(...args){
        if(args.length >= fn.length){
         return  fn(...args)
        }else {
            return function(...newargs){
             return curried(...args  , ...newargs)
            }
        }
    }
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3))



// curry function 
//
//
function sum(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(3))


function buildURL(baseURL) {
  return function(endpoint) {
    return function(query) {
      return `${baseURL}/${endpoint}?${query}`;
    };
  };
}

const api = buildURL("https://api.example.com");

const userAPI = api("users");
console.log(userAPI("id=123")); // https://api.example.com/users?id=123
console.log(userAPI("id=456")); // https://api.example.com/users?id=456
