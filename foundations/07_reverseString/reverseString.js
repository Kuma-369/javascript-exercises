const reverseString = function seperateCharacters(string) {
    let newString = "";
   
    const arr = Array.from(string);
    // return arr;

    for (let i = arr.length - 1 ; i >= 0 ; i--) {
        newString += arr[i];
    }

    return newString;
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
