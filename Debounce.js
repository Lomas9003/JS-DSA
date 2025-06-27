let count = 0;
const getData = function(){
    console.log("data fetched" + " " + count++);
    
}

const data = function(fn , d){
let timer;
    return function(){ 
        let context = this
        args = arguments  

        //it will clear the timer on each function is created on key press 
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context , args)
        }, d)
    }

}

const debounce = data(getData , 300)


const data2  = function(fn , d){
    let flag = true; 
    return function(){
    if(flag){
        getData()
        flag = false; 
        setTimeout(() => {
            flag = true
        }, d)
    }
}
   
}


const throthel = data2(getData, 300)

// throtel example 

function throttle(func, delay) {
  let lastCall = 0;
  let lastResult;

  return function (...args) {
    const now = Date.now();
    console.log(now)
    if (now - lastCall >= delay) {
      lastCall = now;
      lastResult = func.apply(this, args);
    }
    return lastResult;
  };
}

const throttledFn = throttle(() => console.log('Function called!'), 1000);