import React from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import { TaskProvider, useTasks } from './TaskContext';
import { motion } from 'framer-motion';

const TaskCounter = () => {
  const { tasks } = useTasks();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const numberAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  };

  return (
    <motion.div
      className="my-8 p-6 max-w-md mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Resumen de Tareas
      </motion.h3>
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <span className="text-lg font-medium text-gray-700">Total de Tareas:</span>
        </div>
        <motion.span {...numberAnimation} className="text-lg text-blue-600 font-semibold">
          {totalTasks}
        </motion.span>
      </motion.div>
      <motion.div
        className="flex justify-between items-center mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <span className="text-lg font-medium text-gray-700">Tareas Completadas:</span>
        </div>
        <motion.span {...numberAnimation} className="text-lg text-green-600 font-semibold">
          {completedTasks}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

function TaskList() {
  const { tasks, error } = useTasks();

  return (
    <motion.div
      className="my-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {error && (
        <motion.div
          className="text-center text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Error: {error}
        </motion.div>
      )}
      <ul className="space-y-4">
        {tasks.map(task => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Task task={task} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function App() {
  return (
    <TaskProvider>
      <div className="bg-gray-50 min-h-screen pt-10">
        <header className="max-w-4xl mx-auto px-5">
          <h1
            className="text-4xl font-bold text-gray-800 mb-10 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Lista de Tareas
          </h1>
          <TaskForm />
          <TaskCounter />
          <TaskList />
        </header>
      </div>
    </TaskProvider>
  );
}

export default App;
