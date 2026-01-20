
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