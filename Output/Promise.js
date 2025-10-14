


//o/p question on promise and setTimeout 

console.log("Start");

setTimeout(() => console.log("setTimeout 1"), 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("setTimeout 2"), 0);
  })
  .then(() => console.log("Promise 2")); 

console.log("End");


////////////////////////////////////////
console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => console.log("C"));
}, 0);

Promise.resolve().then(() => {
  console.log("D");
  setTimeout(() => console.log("E"), 0);
});

console.log("F");

///////////////////////////////////////
console.log("1");

Promise.resolve().then(() => {
  console.log("2");
  setTimeout(() => {
    console.log("3");
    Promise.resolve().then(() => console.log("4"));
  }, 100);
});

console.log("5");



//////////////////////////////
setTimeout(() => console.log("X"), 0);

setTimeout(() => {
  console.log("Y");
  Promise.resolve().then(() => console.log("Z"));
}, 0);

Promise.resolve().then(() => console.log("P"));

console.log("Q");

/////////////////////////////////
console.log("Start");

setTimeout(() => console.log("T1"), 0);

Promise.resolve()
  .then(() => console.log("P1"))
  .then(() => console.log("P2"))
  .then(() => {
    console.log("P3");
    setTimeout(() => console.log("T2"), 0);
  });

console.log("End");

///////////////////////////////////////
console.log("Init");

Promise.all([
  Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T1"), 0);
  }),
  Promise.resolve().then(() => console.log("P2"))
]).then(() => console.log("All Done"));

setTimeout(() => console.log("T2"), 0);

console.log("Finish");

