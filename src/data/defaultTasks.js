/**
 * Lista de tareas por defecto para la aplicación
 * Cada tarea contiene:
 * - title: Título breve de la tarea
 * - description: Descripción detallada
 * - limit_date: Fecha límite en formato Date
 * - completed: Estado de completado
 * - id: Identificador único
 */
export const defaultTasks = Object.freeze([
    {
        title: 'Ducharse',
        description: 'Realizar las necesidades básicas (baño, lavado dental, etc).',
        limit_date: new Date(new Date().setHours(7, 40, 0, 0)),
        completed: false,
        id: 'task-1'
    },
    {
        title: 'Desayunar',
        description: 'Preparar el desayuno del día.',
        limit_date: new Date(new Date().setHours(8, 0, 0, 0)),
        completed: false,
        id: 'task-2'
    },
    {
        title: 'Leer',
        description: 'Lectura de un libro o artículos de interés.',
        limit_date: new Date(new Date().setHours(8, 20, 0, 0)),
        completed: false,
        id: 'task-3'
    },
    {
        title: 'Ejercitarse',
        description: 'Ejercitarse para mantener la salud y el bienestar.',
        limit_date: new Date(new Date().setHours(9, 0, 0, 0)),
        completed: false,
        id: 'task-4'
    }
]);

// Tipos esperados para validación
export const taskStructure = {
    title: 'string',
    description: 'string',
    limit_date: 'object',
    completed: 'boolean',
    id: 'string'
};
