// Algorithm of the day

/*
    * 1) Given an array of 100 randomly generated values, remove the duplicate values
    * 2) Given an array of non-duplicate values between 1-100, return an array of the missing numbers in that      sequence.
    ! Do not use the 'new Set()' constructor to remove duplicates
*/ 

function generateRandomArray(size) {
    const result = [];
    for (let i = 0; i < size+1; i++) {
        result.push(Math.floor(Math.random() * 100));
    }

    return result;
}

const testArray = generateRandomArray(100);

console.log(testArray);



