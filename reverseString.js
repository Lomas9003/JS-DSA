

// Reverser the string => "ISHAN LOMAS " 

// case 1 -> reverser the string 

function reveseString(str){ 

    let result = ""; 

    for(let i = 0; i<str.length; i++) {
        result = str[i] + result; 
    }

    return result; 

}

console.log(reveseString("IShan Lomas")) 

// case 2 -> reverse the string but there position not changede 

// i/p -> ISHAN LOMAS   o/p -> NAHSI SAMOL 

function reverseString2(str){
    let result = ""; 
    let word = ""; 

    for(let val of str){ 
        if(val === " "){
            result = result + word + " "
            word =""
        }else {
            word = val + word; 
        }
    } 

    result = result + word   ;
    return result.toLocaleLowerCase(); 

}
console.log(reverseString2("ISHAN LOMAS"));

