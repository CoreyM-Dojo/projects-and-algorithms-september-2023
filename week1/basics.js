// Conditionals
// if, if else, else

let num = "Hopped pumpkins";
if (num % 2 === 0) {
    console.log("Hello there!");
}

console.log("Goodbye");
if (typeof num !== "number") {
    console.log("Not a number")
} else if (num > 10) {
    console.log("Greater than 10");
} else if (num > 5) {
    console.log("Greater than 5");
    
} else if (num > 0) {
    console.log("Greater than 0");
} else {
    console.log("We dont deal in negatives here, son");
}

// Switch

switch (num) {
    case num > 10:
        console.log("Greater than 10");
        break
    case num > 5:
        console.log("Greater than 5");
        break
    case num > 0:
        console.log("Greater than 0");
        break
    default:
        console.log("We dont deal in negatives");
}

// Ternaries
let isHungry = false;

let message = isHungry ? "Eat a burger!": "Take a nap";

console.log(message);

// Loop

for (let i=0;i<=20;i++) {
    // continue
    if (i === 10 ) continue
    // break
    if (i > 17) break;
    console.log(i);
}

let i = 0;

while (i <= 20) {
    console.log(i);
    i++;
}



