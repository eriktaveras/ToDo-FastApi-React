import React from 'react';
import { useTasks } from './TaskContext'; // Asumiendo que has implementado TaskContext

function Task({ task }) {
  const { toggleCompleted } = useTasks(); // Utiliza toggleCompleted desde tu contexto

  return (
    <li
      className={`cursor-pointer p-2 rounded-md ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'} hover:bg-gray-100`}
      onClick={() => toggleCompleted(task.id)}
    >
      {task.name}
    </li>
  );
}

export default Task;
