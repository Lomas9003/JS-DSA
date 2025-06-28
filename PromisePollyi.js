// Promise.race pollyfill it will return firest rejected or resolved promise

function promiseRace(promise){
    return new Promise((resolve , reject) => {
        for(let items of promise){
            Promise.resolve(items).then(resolve ,reject)
        }
    })
}


let val = [Promise.reject("rejected") , Promise.resolve("REsolved")]
promiseRace(val).then((result) => console.log(result)).catch((err) => console.log(err))

// orginal promise.race()

Promise.race(val).then((result) => console.log(result)).catch((err) => console.log(err))



function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise) // ensures non-promise values work
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(err => reject(err)); // reject immediately if any fails
    });

    if (promises.length === 0) {
      resolve([]); // handle empty array case
    }
  });
}
