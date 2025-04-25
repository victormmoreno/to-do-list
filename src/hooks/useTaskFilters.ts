import { useMemo, useState } from "react";
import { TaskFilters } from "../types/task";
import useTaskStore from "../store/taskStore";
import { TaskService } from "../services/taskService";


export const useTaskFilters = () => {
    const { taskList, sortField, sortDirection, setSort } = useTaskStore();
    const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending'>('all');
    const filters: TaskFilters = useMemo (() => ({
        status: statusFilter,
        sortField,
        sortDirection
    }), [statusFilter, sortField, sortDirection]);

    const filteredAndSortedTasks = useMemo(() => {
        const filteredTasks = TaskService.filterTasks(taskList, statusFilter);
        return TaskService.sortTasks(filteredTasks, filters);
    }, [taskList, filters, statusFilter]);

    const taskStats = useMemo(() => ({
        total: taskList.length,
        completed: taskList.filter(task => task.completed).length,
        pending: taskList.filter(task => !task.completed).length,
        overdue: taskList.filter(task => TaskService.isOverdue(task.limit_date)).length,
        nearlyDuie: taskList.filter(task => TaskService.isNearlyDue(task.limit_date)).length
    }), [taskList]);

    const handleSort = (field: TaskFilters['sortField']) => {
        if (field === sortField) {
            setSort(field, sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSort(field, 'asc');
        }
    };

    return {
        tasks: filteredAndSortedTasks,
        stats: taskStats,
        filters,
        setStatusFilter,
        handleSort
    }
        
}