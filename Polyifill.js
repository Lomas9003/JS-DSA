// MAP 
arr = [1,2,3,4] 

const val = arr.map((x) => {
    return x*2
})

// console.log(val);

// polyphil of map  

Array.prototype.myMap = function(cb){
    let val = []
    for(i=0; i<=this.length; i++){
        val.push(cb(this[i] , i , this))
    }
    return val
}


Array.prototype.myMap = function(cb){
    let arr = []
    for(let i=0; i<=this.length; i++){
        arr.push(cb(this[i] , i , this))
    } 
    return arr
}

let val2 = arr.myMap((x)=>{
    return x*2
})
console.log(val2);



// ----------->>>>>>>>>>Filter
arr2 = [1,2,5,4]

const val3 = arr2.filter((v) => {
    return v > 2; 
})
// console.log(arr2);

// console.log(val3);

// --------------------> Polyphil of filter 
Array.prototype.myFilter = function(cb){
    let val = []
    for(let i= 0; i<=this.length; i++){
        if(cb(this[i] , i , this)){
            val.push(this[i])
        }
    }
    return val
}

const val4 = arr2.myFilter((v) => {
    return v>2;
})
console.log(val4);


// ---------------> REDUCE
arr3 = [1,2,3,4] 

const val5 = arr3.reduce((acc , cur) => {
     return cur = cur + acc
}, 0)

// console.log(val5);

//  -------------->>>>>>Polyphil of reduce

Array.prototype.myReduce = function(cb , intialval) {
    let val = intialval 

    for(let i= 0; i<this.length; i++){
        val = val ? cb(val , this[i] , i , this) : this[i]
    }
    return val
}


const val6 = arr3.myReduce((acc , crr) => {
    return acc = acc + crr
},0)
// console.log(val6);


// -----------------------------CALL APPLY BIND -------------------------------//  

let name1 = {
    Fname: "ishan", 
    Lname: "lomas"
}
 let name2 = {
    Fname : "Ishan", 
    Lname:  "Lomas",
 }


let myNAem = function(state , city){
    console.log(this.Fname + " " + this.Lname + " " + state +" " + "frome " + city );
    
}

// ----> Normal call
// const val7 = myNAem.call(name1 , "up" , "Meerut")
// console.log(val7);

// ----> Polyphil of call => We use call on funtion so it is a protoype on function 

Function.prototype.myCall = function(context = {} , ...args){
    if(typeof this != "function"){
        return console.error("not a function");
        
    }
    context.fn = this
    context.fn(...args)
}

const val8 = myNAem.myCall(name1 , "up" , "meerut")
// console.log(val8); 


// Polyphill of apply 

Function.prototype.myApply = function(context = {} , arr = []){
    if(typeof this != "function"){
        return console.error("not a function");
        }
        if(!Array.isArray(arr)){
            return console.log("error");
            
        }
    context.fn = this
    context.fn(...arr)
}

const val9 = myNAem.myApply(name1 , ["up" , "meerut"])
// console.log(val9);

// My Bind  

// Normal Bind
const val10 = myNAem.bind(name1 , "UP" , "Meerut") // we can pass the rest of the argument belwo also 
console.log(val10()); 

// polyphill of myBind

Function.prototype.myBind = function(context = {} , ...args) {
    if(typeof this != "function"){
        return "error"
    }
    context.fn = this; 
    return function(...newargs){
        context.fn(...args , ...newargs)
    }

}

const val11 = myNAem.myBind(name1)
// console.log(val11("UK" , "Dheradun"));


// const val = new Object()