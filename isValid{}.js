function isvalid(str){
    let stack = []
    
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }
    
    for(let  i =0; i<str.length; i++){
        if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
        stack.push(str[i])
        }else {
            let val = stack.pop()
            if(str[i] !== map[val]){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isvalid("(]"))