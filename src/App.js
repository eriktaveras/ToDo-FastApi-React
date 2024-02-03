import React from 'react';
import './App.css';
import TaskForm from './TaskForm';
import Task from './Task';
import { TaskProvider, useTasks } from './TaskContext';
// Asegúrate de tener Tailwind CSS importado en tu archivo de entrada o componente principal
import './index.css';

const TaskCounter = () => {
  const { tasks } = useTasks();
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="my-4">
      <p className="text-lg font-semibold">Total de Tareas: <span className="text-indigo-500">{totalTasks}</span></p>
      <p className="text-lg font-semibold">Tareas Completadas: <span className="text-green-500">{completedTasks}</span></p>
    </div>
  );
};

function TaskList() {
  const { tasks, loading, error } = useTasks();

  if (loading) return <div className="text-center my-2">Cargando...</div>;
  if (error) return <div className="text-red-500 my-2">Error: {error}</div>;

  return (
    <ul className="list-none p-0 m-0">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

function App() {
  return (
    <TaskProvider>
      <div className="App bg-gray-100 min-h-screen pt-10">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Lista de Tareas</h1>
          <TaskForm />
          <TaskCounter />
          <TaskList />
        </header>
      </div>
    </TaskProvider>
  );
}

export default App;
