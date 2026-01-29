
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
//Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);
//Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";
console.log("Last Login:", user.lastLogin);
//Update role from "student" to "admin"
user.role="admin";
console.log("Updated Role:", user.role);
//Delete the isActive property
delete user.isActive;
//Use Object.keys() to list all remaining field
console.log("Remaining fields:", Object.keys(user));



const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
const scores = Object.values(marks);

// 1. Calculate total marks using reduce()
const totalMarks = scores.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", totalMarks);

// 2. Calculate average marks
const averageMarks = totalMarks / scores.length;
console.log("Average Marks:", averageMarks.toFixed(2));

// 3. Find the highest scoring subject

// Convert object into entries → [["maths",78], ["physics",65], ...]
const entries = Object.entries(marks);

// Use reduce() to find subject with highest marks
const highestSubject = entries.reduce((max, current) =>
  current[1] > max[1] ? current : max
);

console.log("Highest Scoring Subject:", highestSubject[0], "-", highestSubject[1]);

// 4. Add new subject "computer" with marks 90
marks.computer = 90;

console.log("Updated Marks:", marks);
