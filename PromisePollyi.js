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