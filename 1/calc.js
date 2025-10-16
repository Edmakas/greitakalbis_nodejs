const wt = require('worker_threads');

let res = 0;

// console.log("F-ja jLoop 1")

for(let j = 1; j < 20; j++){
    console.log("F-ja jLoop 2")
    let n = i % j;
    res += n * (Math.random() > 0.5 ? 1 : -1);
}

wt.parentPort.postMessage(res);