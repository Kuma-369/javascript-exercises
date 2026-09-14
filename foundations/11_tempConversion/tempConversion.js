const convertToCelsius = function(fahrenheitTemp) {
  return Math.round((fahrenheitTemp - 32) * 5 / 9 * 10) / 10;
}; // (F - 32) * 5/9 , round up to 2 dp

const convertToFahrenheit = function(celsiusTemp) {
  return Math.round((celsiusTemp * 9 / 5) + 32 * 10) / 10;
}; // (C * 9/5) + 32, round up to 2 dp

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
