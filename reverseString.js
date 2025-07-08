

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



// alternat reverse 

function findReverse (str) {
    
  let words = str.split(' ');
   
function manualReverse(str){
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
    return result 
}
 
 
 let result = words.map((word, index) => {
    if (index % 2 === 0) {
      // Reverse even-indexed words manually
      return manualReverse(word);
    } else {
      return word;
    }
  });
   return result.join(" ") 

}


console.log(findReverse("Hello Iam Saikrishna Ui Developer"));



const sentence = "ChatGPT is awesome";
const words = sentence.split(" ");
let reversed = "";

for (let i = words.length - 1; i >= 0; i--) {
  reversed += words[i];
  if (i !== 0) {
    reversed += " ";
  }
}

console.log(reversed); // Output: "awesome is ChatGPT"



/// if only want to reverse the vovel 

var reverseVowels = function(s) {
    let vowel = new Set("aeiouAEIOU")
    let char = s.split("")
    let left = 0; 
    let right = char.length - 1

    while(left < right){

        while(left < right && !vowel.has(char[left])){
            left++
        }
        while(left < right && !vowel.has(char[right])){
            right--
        }
        [char[left], char[right]] = [char[right] , char[left]]
        left++ 
        right--

    }
    return char.join("")
};

// Input: s = "IceCreAm"

// Output: "AceCreIm"