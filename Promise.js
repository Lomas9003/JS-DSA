

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



////////////////////////PROMISE METHODS

const p33 = Promise.resolve("A");
const p23 = Promise.resolve("B");

Promise.all([p1, p2]).then(values => {
  console.log(values); // ["A", "B"]
});

const p12 = Promise.resolve("Done");
const p22 = Promise.reject("Failed");

Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
  /*
  [
    { status: "fulfilled", value: "Done" },
    { status: "rejected", reason: "Failed" }
  ]
  */
});


const fast = new Promise(res => setTimeout(() => res("Fast"), 100));
const slow = new Promise(res => setTimeout(() => res("Slow"), 500));

Promise.race([fast, slow]).then(console.log); // "Fast"



const p11 = Promise.reject("Err1");
const p21 = Promise.resolve("Success");
const p31 = Promise.reject("Err2");

Promise.any([p1, p2, p3]).then(console.log); // "Success"



// await 

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
  console.log("⏱️ Wait starts...");
  await delay(2000); // waits 2 seconds here
  console.log("✅ Wait over!");
}

test();




















