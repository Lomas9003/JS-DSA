function string(str1 , str2){
    str2 = str2.toString()
    let x = 0; 
    let result = ""
 
    while(x < str1.length || x < str2.length){
        if(x < str1.length) result = result+ str1[x]
        if(x < str2.length) result = result+ str2[x]
        x++
    }
    return result 
}




let str1 = "abc"
let str2 = 123567

console.log(string(str1 , str2))

// o/p - a1b2c3567

