

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