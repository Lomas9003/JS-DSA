

const val = new Promise((resolve , rejected) => {

    let a = false; 
   setTimeout(() => {
    if(a){
        resolve("Promise resolved")
    }else{
        rejected("promise is rejected")
    }

   } , 2000)
  
})


val.then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log(err);
    
})