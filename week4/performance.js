// Closure - enclosing a function definition within an outer function
function outer() {
    let lexicallyScoped = 10;
    function inner() {
        console.log(lexicallyScoped);
        lexicallyScoped++;
    }

    return inner;
}

function range(end, start=0, inc=1, func = null) {
    return function loopTo() {
        for (let i = start; i < end; i+=inc) {

            if (func) {
                func();
            } else {
                console.log(i);
            }
        }
    }
}

const loopTo500 = range(500);
const loopTo20 = range(20);

const doAThingLoop = range(20,0,1,() => console.log("Hello!!!"));

doAThingLoop();
// loopTo500();
let innerFunction = outer();
innerFunction();
// Memoization -> cache results of a function to increase performance
function fibonacci() {
    const memo = {};

    function calculateFibonacci(n) {
        if (n <=1 ) return n;

        if (memo[n] !== undefined) {
            return memo[n];
        }

        memo[n] = calculateFibonacci(n-1) + calculateFibonacci(n - 2);
        return memo[n];


    }

    return calculateFibonacci;
}


const doFib = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(doFib(1000));
}
// Currying -> Creating a sequence of unary (single argument) functions to increase readability and encapsulation

    function getTotalPrice(price) {
        return function applyTax(tax) {
            return function applyDiscount(discount) {
                return price + (price * tax) - (discount);
            }
        }
    }

    const getTotal = getTotalPrice(9.99);
    const applyTax = getTotal(.10);
    const applyDiscount = applyTax(5);


// tag price
// tax
// discount

// total(() => tax(() => (discount)))

let globalVariable = 10;







