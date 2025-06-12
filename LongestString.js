

 function findLongestWord(str){
     let val  = str.split(' ')
     let longest = val[0];
     
     for(let i = 1 ; i<val.length; i++){
         if(val[i].length > longest.length){
             longest = val[i]
         }
     }
     return longest 
 }

console.log(findLongestWord("Hi I am Saikrishna I am a UI Developer hdsjagdhghashdgj")); //o/p- hdsjagdhghashdgj