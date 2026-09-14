const leapYears = function(year) {
    // year % 4 === 0 AND year % 100 !== 0;
    // OR year % 400 === 0;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(1800));

// Do not edit below this line
module.exports = leapYears;
