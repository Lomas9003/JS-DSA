
var groupAnagrams = function(strs) {
    let map = {}

    for(let i =0; i<strs.length; i++){
        // first sort 
        let sorted = strs[i].split("").sort().join()

        // then stor in key value pair 
        if(!map[sorted]){
            map[sorted] = [strs[i]]
        }else {
            map[sorted].push(strs[i])
        }
    }

    // return the object value 
    return [...Object.values(map)]
};


// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]




var isIsomorphic = function(s, t) {
    let StoT = {} // map 
    let TtoS = {} // reverse map

    for(let i =0; i<s.length; i++){

        // to add the value to map 
        if(!StoT[s[i]] && !TtoS[t[i]]){
            StoT[s[i]] = t[i]
            TtoS[t[i]] = s[i]
            // if value exist then check that is equal or not 
        }else if(StoT[s[i]] !== t[i] || TtoS[t[i]] !== s[i]){
            return false
        }
    }
    return true; 
 };