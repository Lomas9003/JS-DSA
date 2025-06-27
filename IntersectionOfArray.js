
// These question is based on the concept of string.has(num) // has pta lgta h number hia yea nhi 


// Intersection of 2 array => find the uniqure value in two the array  

function intersection(arr1, arr2){
    let set1 = new Set(arr1); 
    let result = new Set(); 

    for(let num of arr2){
        if(set1.has(num)){
            result.add(num)
        }
    }
    return Array.from(result)


}

const arr1 = [4,9,5], arr2 = [9,4,9,8,4];
console.log(intersection(arr1, arr2))

function intersection(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        const val = arr1[i];
        if (arr2.includes(val) && !result.includes(val)) {
            result.push(val);
        }
    }

    return result;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// how many vovels are there in your name 

function vovels(str){ 
    let val = new Set("a,e,i,o,u") 
    let result = new Set()
    for(let num of str){
        if(val.has(num)) {
            result.add(num)
        }       
    }
    return Array.from(result);
}
console.log(vovels("ishan lomas"))


// // Example Usage: 
function lengthOfLongestSubstring(str){
    let val = new Set(); 
    let left = 0  
    let maxlength = 0 

    for(let i = 0; i<str.length; i++){
        while(val.has(str[i])){
            val.delete(str[left])
            left++
        }
        val.add(str[i]) 
        maxlength = Math.max(maxlength , i - left + 1)
    }
    return maxlength;
}


console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
// console.log(lengthOfLongestSubstring(""));