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
const indexof27=temperatures.findIndex(temp=>temp   === 27)
console.log("Index of temperature 27°C:", indexof27);



const courses = ["javascript", "react", "node", "mongodb", "express"];
//    1. filter() courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Courses with length > 5:", longCourses)

// 2. map() to convert course names to uppercase
const upperCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase courses:", upperCourses);
    // 3. reduce() to generate a single string:
    //"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = upperCourses.reduce((acc, course) => acc + " | " + course,"");
console.log("Single string:", courseString);
    // 4. find() the course "react"
const foundCourse = courses.find(course => course === "react");
console.log("Found course:", foundCourse);
    // 5. findIndex() of "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of node:", nodeIndex);


