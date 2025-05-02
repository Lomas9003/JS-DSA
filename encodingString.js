
function encodingString(str){
    let result = ""
    count = 1; 

    for(let i =0; i<str.length; i++){
        if(str[i] == str[i+1]){
            count = count + 1;
        }else {
            result = result + count + str[i] 
        }
    }
   return result 
}




let input = "abbcccddddeea"; 
console.log(encodingString(input)) 