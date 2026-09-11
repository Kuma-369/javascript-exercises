const repeatString = function joinStringNum(string, num) {
    let result = "";
    if (num < 0) {
        return "ERROR";
    } else { 
        for (let i = 0; i < num; i++) {
            result += string;
        }

    }

    return result;
};

console.log(repeatString("hey", 5));


// function testing(computerInput, userInput) {
//     let result = "";
//     if (userInput < 0){
//         return "ERROR";
//     }
//     else {
//         for (let i = 0; i < userInput; i++) {
//             result += computerInput;
//         }
//     }
//     return result;
// }


// console.log(testing("ha",0))

// Do not edit below this line
module.exports = repeatString;
