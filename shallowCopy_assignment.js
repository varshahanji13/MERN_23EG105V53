
const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                 theme: "dark",
                 language: "en"
                }
              };

/*
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
const shallowCopy= {...user}; //shallow copy using spread operator
shallowCopy.name="Varsha"; //modifying name in copied object
shallowCopy.preferences.theme="light"; //modifying nested object property in copied object
console.log("Original Object:",user);
console.log("Shallow Copied Object:",shallowCopy);


