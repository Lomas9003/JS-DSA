let obj1 = {
    name : "ishan", 
    Age : 25, 
    City : "Meerut ",
    social : {
        acc2 : "hello",
        facebook: {
            acc1 : "avbx@gmai.com"
        },
        twitter: {
            acc1 : "vavav@gmail.com"
        }
    }
}

let obj2 = {...obj1}

function deepCopy(obj){
    if(typeof obj != "object" || obj === null) {
        return obj
    } 
    let copyVal = Array.isArray(obj) ? [] : {}
    let key =  Object.keys(obj) 

    for(let i = 0; i<key.length ; i++){
        copyVal[key[i]] = deepCopy(obj[key[i]])
    }
    return copyVal
} 




const val = deepCopy(obj1)
 val.social.facebook.acc1 = "checked"
console.log(val); 


let va = JSON.stringify(obj) 
let d = JSON.parse(va)