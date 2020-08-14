const calculate = require('./build/Release/calculate');

console.time('c++');
calculate.calc();
console.timeEnd('c++');

function calc() {
    let x = 100.12354689;
    let y = 200.23489273;
    for (let i = 0; i < 1000000000; i++) {
        x += y;
    }
    return x;
}

console.time('javascript');
calc();
console.timeEnd('javascript');