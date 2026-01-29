// Validate task title
// Validate task title (not empty, min 3 chars)
export function validateTitle(title) {

  // Check if title is empty or undefined
  if (!title) return 'Title cannot be empty';

  // Check minimum length (at least 3 characters)
  if (title.length < 3) return 'Title must be at least 3 characters long';

  // If all checks pass
  return 'Valid Title';
}


//Validate priority (must be: low, medium, high)
export function validatePriority(priority) {

  // Check if priority is empty
  if (!priority) return 'Priority cannot be empty';
 
  if (!['low','medium','high'].includes(priority.toLowerCase()))
    return 'Priority must be low, medium, or high';
   return 'Valid Priority';
}


//  Validate due date (must be future date)
export function validateDueDate(date) {

  // Check if date is empty
  if (!date) return 'Due date cannot be empty';

  // Get today's date
  const today = new Date();

  // Convert input string to Date object
  const dueDate = new Date(date);

  // Remove time part (only compare dates)
  today.setHours(0,0,0,0);
  dueDate.setHours(0,0,0,0);

  // Check if due date is not in the future
  if (dueDate <= today) return 'Due date must be a future date';

  // If everything is correct
  return 'Valid Due Date';
}
