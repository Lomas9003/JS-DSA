function capitalizeWords(sentence) {
    // Your implementation  
    let val = sentence.trim().split(' ').join(' ')
    let result = ""; 
    let capital = true  

    for (let i = 0; i < val.length; i++){
        let ch = val[i];

        if (ch === " ") { 
            result = result + ch;
            capital = true; 
        } else {
            if (capital && ch >= 'a' && ch <= 'z') {
                result = result + val[i].toUpperCase()
            } else if (!capital && ch >= 'A' && ch <= 'Z') {
                result = result + val[i].toLowerCase()
            } else {
                result = result + ch;
            }
            capital = false
        }
    }
    return result;
}

console.log(capitalizeWords("my name is ishan"))