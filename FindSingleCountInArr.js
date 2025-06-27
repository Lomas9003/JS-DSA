

// we have to find the single number in array where arr the numbers are doubled

function FindSingleNo(arr){
    let hash = {}

    for(let i = 0; i<arr.length; i++){
        // if no value add one 
        if(!hash[arr[i]]){
            hash[arr[i]] = 1
        }
        else{
            //  if value is there then incere the count 
            hash[arr[i]]++
        }
    }

    //  loop over arrr again and check in hash whoes count is one

    for(let i = 0; i<arr.length; i++){
        if(hash[arr[i]] == 1){
           return arr[i]
        }
    }
}

console.log(FindSingleNo([4,1,2,1,2])) // o/p - 4

///////////////////////////////////////////////////////////////////////////////////////////

function firstUniqueChar(s) {
    const map = {};

    // Step 1: Count frequency of each character
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    // Step 2: Find the first character with count = 1
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}
// console.log(firstUniqueChar("leetcode")); // 0
// console.log(firstUniqueChar("loveleetcode")); // 2
// console.log(firstUniqueChar("aabb")); // -1