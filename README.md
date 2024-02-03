
# Proyecto Lista de Tareas con React y FastAPI

Este proyecto es una aplicación de lista de tareas simple que utiliza React en el frontend y FastAPI en el backend. La aplicación permite a los usuarios añadir, marcar como completadas y visualizar tareas. Los estilos de la interfaz de usuario se gestionan con Tailwind CSS para un diseño moderno y responsivo.

## Características

- **Crear Tareas**: Los usuarios pueden añadir nuevas tareas a la lista.
- **Marcar Tareas como Completadas**: Las tareas pueden ser marcadas como completadas con un simple clic.
- **Visualización Dinámica**: Las tareas se actualizan dinámicamente en la interfaz de usuario.

## Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: FastAPI
- **Estilos**: Tailwind CSS

## Requisitos Previos

Para ejecutar este proyecto, necesitarás tener instalado:

- Node.js y npm
- Python 3.7+ y pip

## Instalación

### Configuración del Backend

1. Navega al directorio del backend y crea un entorno virtual:
   ```bash
   python -m venv venv
   ```
2. Activa el entorno virtual:
   - En Windows: `venv\Scripts\activate`
   - En macOS y Linux: `source venv/bin/activate`
3. Instala las dependencias:
   ```bash
   pip install fastapi uvicorn
   ```
4. Ejecuta el servidor de FastAPI:
   ```bash
   uvicorn main:app --reload
   ```

### Configuración del Frontend

1. Navega al directorio del frontend e instala las dependencias de Node.js:
   ```bash
   npm install
   ```
2. Inicia la aplicación React:
   ```bash
   npm start
   ```

## Uso

Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación React. La API de FastAPI se ejecuta en `http://localhost:8000`.

## Contribuir

Las contribuciones son bienvenidas. Por favor, siente libre de forkear el repositorio y enviar tus pull requests.

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.