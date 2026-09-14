const convertToCelsius = function(fahrenheitTemp) {
  return Math.round((fahrenheitTemp - 32) * 5 / 9 * 10) / 10;
}; // (F - 32) * 5/9 

const convertToFahrenheit = function(celsiusTemp) {
  return Math.round((celsiusTemp * 9 / 5) + 32 * 10) / 10;
}; // (C * 9/5) + 32

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
