import React from "react";
import { TaskItem } from "./TaskItem";
import { useTaskFilters } from "../../hooks/useTaskFilters";

export const TaskList: React.FC = () => {
    const { tasks, stats, filters, setStatusFilter, handleSort } = useTaskFilters();
    return (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <span className="mr-4">Total: {stats.total}</span>
              <span className="mr-4">Completadas: {stats.completed}</span>
              <span className="mr-4">Pendientes: {stats.pending}</span>
              <span>Vencidas: {stats.overdue}</span>
            </div>
            
            <div className="flex gap-2">
              <select
                value={filters.status}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="rounded-md border-gray-300 text-sm"
              >
                <option value="all">Todas</option>
                <option value="pending">Pendientes</option>
                <option value="completed">Completadas</option>
              </select>
              
              <select
                value={filters.sortField}
                onChange={(e) => handleSort(e.target.value as any)}
                className="rounded-md border-gray-300 text-sm"
              >
                <option value="limit_date">Fecha límite</option>
                <option value="created_at">Fecha creación</option>
                <option value="completed">Estado</option>
              </select>
            </div>
          </div>
    
          <div className="space-y-4">
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))}
          </div>
    
          {tasks.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              No hay tareas que mostrar
            </div>
          )}
        </div>
      );
}