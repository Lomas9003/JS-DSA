function getUniqueArr(arr){
    let result =[]
    let val = {}

    for(let i =0; i<arr.length; i++){
        let current = arr[i].name

        if(!val[current]){
            result.push(arr[i])
            val[current] = true
        }
    }
    return result
}


let arr = [{name: "sai"},
{name:"Nang"},
{name: "sai"},
{name: "111111"}]
 console.log(getUniqueArr(arr))