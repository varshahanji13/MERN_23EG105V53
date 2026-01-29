import { validateTitle, validatePriority, validateDueDate } from './validator.js';
/*
       ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions
*/
const tasks = [];
// 1. Add new task
function addTask(title, priority, dueDate) {
    // Validate using imported functions
    const titleValidation = validateTitle(title);
    if (titleValidation !== 'Valid Title') {
        return titleValidation;
    }
    const priorityValidation = validatePriority(priority);
    if (priorityValidation !== 'Valid Priority') {
        return priorityValidation;
    }
    const dueDateValidation = validateDueDate(dueDate);
    if (dueDateValidation !== 'Valid Due Date') {
        return dueDateValidation;
    }
    // If valid, add to tasks array
    const newTask = {
        id: tasks.length + 1,
        title,
        priority,
        dueDate,
        completed: false
    };
    tasks.push(newTask);
    // Return success message
    return 'Task added successfully';
}   
// 2. Get all tasks
function getAllTasks() {
    // Return all tasks
    return tasks;
}
// 3. Mark task as complete
function completeTask(taskId) {
    // Find task and mark as complete
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        return 'Task marked as complete';
    }
    return 'Task not found';
}
// Export functions
export { addTask, getAllTasks, completeTask };





