/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
*/

const currentDate=new Date(); //creating date object for current date & time
console.log("Current Year:",currentDate.getFullYear()); //extracting year
const month=currentDate.getMonth()+1 //extracting month (adding 1 for human readable format)
console.log("Current Month:",month); 
console.log("Current Date:",currentDate.getDate()); //extracting date
console.log("Day of the Week:",currentDate.getDay()); //extracting day of week
console.log("Current Time:",currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()); //extracting hours, minutes, seconds
//formatting date as DD-MM-YYYY HH:mm:ss
const formatDate= currentDate.getDate() + "-" + month + "-" + currentDate.getFullYear() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
console.log("Formatted Date:",formatDate);

/*
Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
-------------------------------
 Given:
      let enrollmentDeadline = new Date("2026-01-20");
Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid

*/
let enrollmentDeadline = new Date("2026-01-20");
const today=new Date();
if(today<enrollmentDeadline){
    console.log("Enrollment Open");
}
else{
    console.log("Enrollment Closed");
}

// Validating user input date
function isValidDate(dateString){
    const date=new Date(dateString);//creating date object from user input
    return date instanceof Date && !isNaN(date);//instanceof checks if date is a Date object 
    // isNaN checks if it's a valid date
}       
const userInput="2026-02-30";
if(isValidDate(userInput)){
    console.log(userInput,"is a valid date");
}
else{
    console.log(userInput,"is an invalid date");
}

/*
Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years
*/

function calculateAge(dobString){

    let dob=new Date(dobString);
    let today=new Date();
    let age=today.getFullYear()-dob.getFullYear();
    const monthDiff=today.getMonth()-dob.getMonth();
    if(monthDiff<0 || (monthDiff===0 && today.getDate()<dob.getDate())){
       //if birthday hasn't occurred yet this year 
        age--;  //decrement age by 1 because birthday hasn't occurred yet
    }
    return age;//returning calculated age
}
let dob="2000-05-15";
console.log("Age is:",calculateAge(dob),"years");
