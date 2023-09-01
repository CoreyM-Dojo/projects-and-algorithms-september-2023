// Anatomy of arrays

const array = [];

// push - add to end of an array

array.push(10);
array.push("Hello");
array.push([1,2,3]);

// Get a value from an array
// Arrays are indexed starting with 0
console.log(array);
console.log(array[1]);
console.log(array[2][1]);


// pop

array.pop(); // removes the last value of an array and returns that value

// unshift - adds to the beginning of an array

array.unshift(5);
console.log(array);

// Shift -> removes the first element of an array and returns the value

array.shift();
console.log(array);

// Splice

const numbers = [1,2,3,5,6,7,8,9,10];
numbers.splice(3,0,4);
console.log("Numbers:",numbers)

// Higher order functions

// ForEach
function findSum(arr) {
    let sum = 0;
    arr.forEach(el => sum += el);
    return sum;
}

console.log(findSum([1,2,3,4,5,6,7,8]));

const namesArray = ["evan", "caden", "brendan", "jesus", "rishad", "corey"];

function capitalize(arr) {
    return arr.map((name) => name[0].toUpperCase() + name.slice(1));
}

console.log(capitalize(namesArray));





