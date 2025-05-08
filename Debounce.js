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
            getData.apply(context , args)
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