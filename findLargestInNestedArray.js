
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
console.log(findLargestInNestedArray(nestedArr));