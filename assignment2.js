/*
Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message

*/
 let isLoggedIn = true;
 let isProfileComplete = false;
 if(isLoggedIn === false){
    console.log("Please login");
 }
 else if(isLoggedIn === true && isProfileComplete === false){
    console.log("Complete your profile");
 }
 else
 {
    console.log("Welcome back!");
}