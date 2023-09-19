// T-Diagrams



// sum([1,2,3,4,5]);

// Callbacks
function average() {
    let arr = generateRandom(10)
    return sum(arr)/arr.length;
}

function sum(arr) {
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }

    return sum;
}

function generateRandom(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    
    return arr;
}

// console.log(average());

// Recursion -> calling a function within itself

// break case
// running logic
// recursive callback

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
} 

// countDown(10);

function rCountdown(num)  {

    // Break case 
    if (num < 0) return 0;

    console.log(num);
    return rCountdown(num-1)
}


// rCountdown(10);

// 0,1,1,2,3,5,8,13,21,34,55
// the nth number in the fibonnacci sequence
function fibonnacci(num, i=1, current=1, prev=0, result=0) {
    if (num <= 0) return 0;
    if (num <=3) return num-1;

    // Break case
    if (num === i) return result;

    return fibonnacci(num, i+1, current+prev, current, current+prev);
}

console.log(fibonnacci(9));



