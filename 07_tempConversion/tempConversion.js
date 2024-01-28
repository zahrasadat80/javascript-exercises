const convertToCelsius = function(f) {
  let c = (f-32)*(5/9);
  if (c%1 !==0){//this condition check if number is not whole number 
    return Number(c.toFixed(1));//to fixed return string 
  }
  return c;
};

const convertToFahrenheit = function(c) {
  let f = c * (9/5) + 32;
  if (f%1 !==0){
    return Number(f.toFixed(1));
  }
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
