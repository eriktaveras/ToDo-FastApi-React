// src/api.js
const BASE_URL = 'http://localhost:8000/tasks/';

export const fetchTasks = async (sortField) => {
  // Construir la URL con el parámetro de consulta
  const url = new URL(BASE_URL);
  if (sortField) {
    url.searchParams.append('sort', sortField);
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Error al cargar las tareas');
  }
  return await response.json();
};

export const createTask = async (task) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error('Error al crear la tarea');
  }
  return await response.json();
};

// Añade más funciones para actualizar y eliminar tareas según sea necesario
// Añadir esta nueva función para actualizar tareas
export const updateTask = async (id, updatedTask) => {
  const response = await fetch(`${BASE_URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar la tarea');
  }
  return await response.json();
};