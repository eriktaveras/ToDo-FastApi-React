import React, { useState } from 'react';
import { useTasks } from './TaskContext';

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useTasks(); // Correctamente extrae addTask del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      await addTask({ name: taskName, completed: false });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto my-8">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter a task name"
          className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
