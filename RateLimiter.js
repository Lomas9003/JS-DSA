
function rateLimiter(request , limit , time){
    let queu = []
    let allowed = 0;
    
    for(let i =0; i<request.length; i++){
        let currentTime = request[i]
        
        while(queu.length && currentTime - request[0] >= time){
            queu.shift()
        }
        
        if(queu.length < limit){
            queu.push(currentTime)
            allowed++
        }else {
      // 🚫 Too many requests in this window
      console.log(
        `⛔ Request at ${currentTime}ms blocked (limit ${limit} per ${time}ms)`
      );
    }
    }
    return allowed;
}



const requests = [1000, 2000, 3000, 4000, 7000, 8000];
console.log("✅ Allowed Requests:", rateLimiter(requests, 3, 5000));