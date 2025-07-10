
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


// find the second largest in nested 

function findLargestInNestedArray(arr){
    let max = -Infinity 
    let second = -Infinity
    
    for(let val of arr){
        if(Array.isArray(val)){
            for(let val2 of val){
                if(val2 > max){
                    second = max
                    max = val2
                }else if(val2 > second && val2 !== max){
                    second = val2
                }
            }
        }else{
            if(val > max){
                second = max
                max = val
            }else if(val > second && val !== max){
                second = val
            } 
        }
    }
    return second
}




// const nestedArr = [[10, 25, 30], 120,  [5,150,300 , 100, 2], [7,300, 20, 50] , 16];
//  console.log(findLargestInNestedArray(nestedArr)); 


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