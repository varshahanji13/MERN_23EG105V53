// TODO: Import task functions
import { addTask, getAllTasks, completeTask } from './task.js';
// Test your module system
// 1. Add some tasks
console.log(addTask('Buy groceries', 'high', '2026-02-10'));
console.log(addTask('Cook the food', 'medium', '2026-02-11'));
console.log(addTask('Clean the house', 'low', '2026-02-12'));

// 2. Display all tasks
console.log(getAllTasks());
// 3. Mark a task as complete
console.log(completeTask(2));
// 4. Display all tasks again
console.log(getAllTasks());


      

