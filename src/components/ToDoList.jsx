import { useMemo } from 'react';
import { useTime } from '../hooks/useTime';
import useTaskStore from '../store/taskStore';
import SortComponent from './SortComponent.jsx';
import { TaskListView } from '../views/TaskListView.jsx';
import { EmptyStateView } from '../views/EmptyStateView.jsx';

export default function ToDoList({ activeTab, taskList }) {
    const currentTime = useTime();
    const {
        sortField,
        sortDirection,
        completeTask,
        deleteTask,
        updateTask,
        setSort
    } = useTaskStore();

    const filteredTasks = activeTab === 'completed' 
        ? taskList.filter(task => task.completed)
        : taskList;

    const sortedTasks = useMemo(() => {
        return [...filteredTasks].sort((a, b) => {
            if (sortField === 'title') {
                return sortDirection === 'asc' 
                    ? a.title.localeCompare(b.title)
                    : b.title.localeCompare(a.title);
            } else if (sortField === 'limit_date') {
                let DateA = new Date(a.limit_date);
                let DateB = new Date(b.limit_date);
                return sortDirection === 'asc'
                    ? DateA - DateB
                    : DateB - DateA;
            } else if (sortField === 'completed') {
                return sortDirection === 'asc'
                    ? (a.completed === b.completed ? 0 : a.completed ? 1 : -1)
                    : (a.completed === b.completed ? 0 : a.completed ? -1 : 1);
            }
            return 0;
        });
    }, [filteredTasks, sortField, sortDirection]);

    return (
        <section className="mb-6 sm:mb-8 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Lista de tareas</h1>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <SortComponent onSortChange={setSort} />
                </div>
            </div>
            <ul className="space-y-2 overflow-y-auto">
                {sortedTasks.length > 0 ? 
                    sortedTasks.map(task => (
                        <TaskListView
                            key={task.id}
                            task={task}
                            currentTime={currentTime}
                            onEditTask={updateTask}
                            onDeleteTask={deleteTask}
                            onCompleteTask={completeTask}
                        />
                    )) : (
                        <EmptyStateView activeTab={activeTab} />
                    )
                }
            </ul>
        </section>
    );
}
