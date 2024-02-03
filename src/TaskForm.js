import React, { useState } from 'react';
import { useTasks } from './TaskContext';

function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    await addTask({ name: taskName, completed: false });
    setTaskName('');
    // Opcional: Agregar feedback visual o sonoro aquí para confirmar la adición
  };

  return (
    <div className="flex justify-center mt-12 mb-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex items-center border-b border-indigo-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-400"
            type="text"
            placeholder="What needs to be done?"
            aria-label="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <button
            className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-600 text-sm text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
