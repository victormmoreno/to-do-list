export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    limit_date: string;
    created_at?: string;
}

export interface TaskFilters {
    status?: 'all' | 'completed' | 'pending';
    sortField: 'completed' | 'created_at' | 'limit_date';
    sortDirection: 'asc' | 'desc';
}

export interface TaskFormData {
    title: string;
    description: string;
    limit_date: string;
}