// counting the occurance of string 

function countchar(str){
    let countChar = {}

    for(let char of str){
        countChar[char] = (countChar[char] || 0) + 1; 
    }

    return countChar
}


// console.log(countchar("ISHAN LOMAS")) 

// onther question 
// Q.  Anagrams 
// LISTEN = SILTEN -> It is angram becuse all the words use in listen are same in silent 


function anagrams(str1 , str2){
    let obj = {} 

    if(str1.length !== str2.length){
        return false; 

    }

    if(str1 === str2){
        return true
    } 

    for(let char of str1){
        obj[char] = (obj[char] || 0) + 1; 
    }

    for(let val of str2){
        if(!obj[val]){
            return false
        }else{
            obj[val]--
        }
    }
return true
}




// console.log(anagrams("silent" , "listen")); 


// same we can do for the square of array


function insameFrequency(arr1 , arr2){
    let arrf1 = {} 
    let arrf2 = {}

    if(arr1.length !== arr2.length){
        return false
    } 

    for(let val1 of arr1){
        arrf1[val1] = (arrf1[val1] || 0) + 1;
    }

    for(let val2 of arr2){
        arrf2[val2] = (arrf2[val2] || 0) + 1;
    }

    for(let keys of arr1) {
        let square = keys * keys 
        if(!(square in arrf2)){
            return false
        }
        // check the count
        if(arrf1[keys] !== arrf2[square]){
            return false
        }
    }
    return true
}





console.log(insameFrequency([1,2,3] , [1,4,9]))  // true 
console.log(insameFrequency([1,2,3,5,1] , [25,1,4,9,25])) // false