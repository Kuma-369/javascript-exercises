const removeFromArray = function(arr, num) {
    const oldArr = arr;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (oldArr[i] !== num) {
            newArr.push(oldArr[i]);
        }
     
    }
    return newArr;   
};

console.log(removeFromArray([1,2,3,4,5], 4));

// Do not edit below this line
module.exports = removeFromArray;
