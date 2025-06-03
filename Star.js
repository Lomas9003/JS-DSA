// Star pattern 


let n = 6; 
   
    for (let i = 0; i < n; i++){
         let row = ""
        for (let j = 0; j < i + 1; j++){
            row = row + "*";
        }
          console.log(row)
    } 
//   *
//   **
//   ***

let n1 = 4; 
   
    for (let i = 0; i < n1; i++){
        let row = ""
        for (let j = 0; j < i + 1; j++){
           row = row + (j + 1)
        }
          console.log(row)
    } 
  

// 1
// 1 2
// 1 2 3
// 1 2 3 4


   let n2 = 6; 
    
        for (let i = 0; i < n2; i++){
            let row = ""
            for (let j = 0; j <= i ; j++){
                  row = row + (i + 1)
            }
          console.log(row)
        } 
    

//  1
//  22
//  333
//  4444


//  let n = 6; 

for (let i = 0; i < n; i++){
    let row = ""
    for (let j = 0; j < n - i; j++){
            row = row + (j+1)
    }
    console.log(row)
    }

    //  123456
    //  12345
    //  1234
    //  123
    //  12
    //  1

    // let n = 5

for(let i =0 ; i<n; i++){
    let row = ""
    for(let j = 0 ; j< n - (i+1); j++){
        row = row + " "
    }
    for(let k = 0; k<(i+1); k++){
        row = row + "*" + " "
    }
   console.log(row)
}
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 

// let n = 5

for(let i =0 ; i<n; i++){
    let row = ""
    for(let j = 0 ; j< n - (i+1); j++){
        row = row + " "
    }
    for(let k = 0; k<(i+1); k++){
        row = row + "*" 
    }
   console.log(row)
}
//     *
//    **
//   ***
//  ****
// *****


for(let i = 0 ;i<n; i++){
    let row = "" 
    let switch1 = 1;
    for(j= 0; j<i+1; j++){
        row = row + switch1
        if(switch1 == 1){
            switch1 = 0
        }else {
            switch1 = 1
        }
    }
    console.log(row)
}

// 1
// 10
// 101
// 1010
// 10101


// let n = 5
 let toggel = 1

for(let i = 0; i<n; i++){
   let row = "" 
    for(let j=0; j< (i+1) ; j++){    
        row = row + toggel
        if(row == 1){
            toggel = 0
        }else {
            toggel = 1
        }
    }
    console.log(row)
}

// 1
// 01
// 010
// 1011
// 10111