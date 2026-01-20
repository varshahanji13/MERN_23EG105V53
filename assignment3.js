const temperatures = [32, 35, 27, 40, 38, 30, 42];

// filter() temperatures above 35
const hottemperature=temperatures.filter(temp=>temp>35);
console.log("Temperatures above 35°C:", hottemperature);

// map() to convert all temperatures from Celsius → Fahrenheit
const fahrenheitTemperatures=temperatures.map(temp=>(temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", fahrenheitTemperatures);

//reduce() to calculate average temperature
const avgtemperature=temperatures.reduce((avg,temp)=>avg+temp,0)/temperatures.length;
console.log("Average Temperature:", avgtemperature.toFixed(2)+"°C");

// find() first temperature above 40
const tempabove40=temperatures.find(temp=>temp>40);
console.log("First temperature above 40°C:", tempabove40);

// findIndex() of temperature 27
const indexof28=temperatures.findIndex(temp=>temp==27)
console.log("Index of temperature 27°C:", indexof28);




