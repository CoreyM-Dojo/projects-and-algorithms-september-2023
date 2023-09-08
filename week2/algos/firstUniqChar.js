var firstUniqChar = function(s) {

    // Use an outer loop to keep track of the current character
    // Use an inner for loop to iterate through the string
    // check if the current character is ever equal to character were at in the iteration
    // If the characters match, move our current character to the  next one in the string
    // if we reach the end of the outer loop, there are no unique characters -> return -1
    // if we reach the end of the inner loop we return the index of the current character

    for (let i = 0; i < s.length; i++) {
        console.log("running outer loop:", i);
        let currentCharacter = s[i];
        for (let j = 0; j < s.length; j++) {
          // exclude the current character
          if (currentCharacter === s[j] && i != j) {
              console.log("Found a match")
              console.log(currentCharacter);
              console.log(s[j]);
              break
          } 

          if (j === s.length - 1) {
              console.log("Weve reached the end of the inner loop")
              return i;
          }

        }
    }
    // If we get out of the outer loop
    return -1;

};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));