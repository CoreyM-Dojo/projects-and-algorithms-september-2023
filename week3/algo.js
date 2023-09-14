var majorityElement = function(nums) {

    let freqTable = {

    }

    for (let i = 0; i < nums.length; i++) {
        if (freqTable.hasOwnProperty(nums[i])) {
            freqTable[nums[i]]++;
        } else {
            freqTable[nums[i]] = 1;
        }

        console.log(freqTable)
    }

    let frequencies = Object.entries(freqTable);
    frequencies.sort((a,b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        if (a[1] === b[1]) return 0;
    } )
    console.log(frequencies)
    return frequencies[frequencies.length-1][0]
    
};