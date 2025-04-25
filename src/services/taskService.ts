import { Task, TaskFilters } from '../types/task';
import { TIME_CONSTANTS } from '../config/constants';

export class TaskService {

    static isOverdue(limitDate: string): boolean {
        if (!limitDate) return false;
        return new Date() > new Date(limitDate);
    }

    static isNearlyDue(limitDate: string): boolean {
        if (!limitDate) return false;
        const limit = new Date(limitDate);
        const tenMinutes = TIME_CONSTANTS.NEARLY_DUE_MINUTES * 60 * 1000;
        const now = new Date();
        return now > (new Date(limit.getTime() - tenMinutes)) && now < limit;
    }

    static sortTasks(tasks: Task[], filters: TaskFilters): Task[] {
        return [...tasks].sort((a, b) => {
            const { sortField, sortDirection } = filters;
            const multiplier = sortDirection === 'asc' ? 1 : -1;

            switch (sortField) {
                case 'completed':
                    return (Number(a.completed) - Number(b.completed)) * multiplier;
                case 'created_at':
                    return (new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime()) * multiplier;
                case 'limit_date':
                    return (new Date(a.limit_date).getTime() - new Date(b.limit_date).getTime()) * multiplier;
                default:
                    return 0;
            }
        })
    }

    static filterTasks(tasks: Task[], status: string): Task[] {
        switch (status) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'pending':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    }

    static validateTask(task: Partial<Task>): { isValid: boolean, errors: Record<string, string> } {
        const errors: Record<string, string> = {};

        if (!task.title?.trim()) {
            errors.title = 'El tìtulo es obligatorio';
        } else if (task.title.length < 3) {
            errors.title = 'El título debe tener mas de 3 caracteres';
        }

        if (!task.limit_date) {
            errors.limit_date = 'La fecha límite es obligatoria';
        } else if (new Date(task.limit_date) < new Date()) {
            errors.limit_date = 'La fecha límite no puede ser anterior a la fecha actual';
        }

        return { isValid: Object.keys(errors).length === 0, errors }
    }



}