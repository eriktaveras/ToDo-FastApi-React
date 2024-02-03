import React from 'react';
import { useTasks } from './TaskContext'; // Asumiendo que has implementado TaskContext
import { motion } from 'framer-motion';

function Task({ task }) {
  const { toggleCompleted } = useTasks(); // Utiliza toggleCompleted desde tu contexto


  
  // Define las animaciones para las tareas
  const taskContainerAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  const taskTextAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto my-2"
      variants={taskContainerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className={`flex items-center justify-between bg-white p-4 rounded-lg shadow transition duration-300 ease-in-out hover:scale-105 cursor-pointer`}
        onClick={() => toggleCompleted(task.id)}
      >
        <motion.span
          className={`flex-grow text-lg ${task.completed ? 'text-green-600 line-through' : 'text-gray-800'}`}
          variants={taskTextAnimation}
        >
          {task.name}
        </motion.span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${task.completed ? 'text-green-500' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={`M5 13l4 4L19 7`} />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default Task;
