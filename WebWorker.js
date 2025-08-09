// main.js
const worker = new Worker("worker.js");
worker.postMessage(5); // send data to worker

worker.onmessage = (e) => {
  console.log("Result from worker:", e.data);
};

// worker.js
onmessage = (e) => {
  const num = e.data;
  postMessage(num * 2); // send result back
};
