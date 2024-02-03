import React, { createContext, useContext, useState, useEffect } from 'react';
import * as api from './api'; // Asegúrate de que este archivo define y exporta fetchTasks, createTask, y updateTask

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        const data = await api.fetchTasks();
        setTasks(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const addTask = async (newTask) => {
    setLoading(true);
    try {
      const addedTask = await api.createTask(newTask);
      setTasks(currentTasks => [...currentTasks, addedTask]);
    } catch (error) {
      setError('Error al añadir la tarea');
    }
    setLoading(false);
  };

  const toggleCompleted = async (id) => {
    try {
      setLoading(true);
      const task = tasks.find(task => task.id === id);
      const updatedTask = await api.updateTask(id, { ...task, completed: !task.completed });
      setTasks(currentTasks => currentTasks.map(t => t.id === id ? updatedTask : t));
    } catch (error) {
      setError('Error al actualizar la tarea');
    }
    setLoading(false);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, loading, error, addTask, toggleCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};
