
function findLargestInNestedArray(arr){
    let max = -Infinity; 

    for(let main of arr){
        if(Array.isArray(main)){
            for(let val of main){
                if(val > max){
                    max = val
                }
            }
        }else if( main > max) {
            max = main
        }
    }
    return max
}




const nestedArr = [[10, 25, 30], 120,  [5, 100, 2], [7, 20, 50] , 16];
// console.log(findLargestInNestedArray(nestedArr)); 


// flaten the nested array 
function flattenArray(arr){
    let stack = [...arr]
    let result = [] 

    while(stack.length){
        let next = stack.pop()

        if(Array.isArray(next)){
            stack.push(...next)
        }else {
            result.push(next)
        }
    }
    return result.reverse()
}


console.log(flattenArray([1, [2, [3, [4, 5]]]])); 