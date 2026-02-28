function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded shadow">
      <div>
        <h2
          className={`font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h2>
        <p className="text-sm text-gray-600">
          Priority: {task.priority}
        </p>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;