import { CompleteTaskComponent } from '../components/CompleteTaskComponent.jsx';
import { EditButtonComponent } from '../components/EditButtonComponent.jsx';
import { DeleteButtonComponent } from '../components/DeleteButtonComponent.jsx';
import { formatDateForInput } from '../utils/dateFormatter.js';
import { useTaskStatus } from '../hooks/useTaskStatus.js';
import useTaskStore from '../store/taskStore';

export function TaskListView({ 
    task, 
    currentTime
}) {
    const { updateTask, deleteTask, completeTask } = useTaskStore();
    const { isOverdue, isNearlyDue } = useTaskStatus();
    return (
        <li key={task.id} className={`mb-3 sm:mb-4 p-3 sm:p-4 rounded-lg ${
            task.completed ? '!bg-green-100' : 
            isOverdue(task.limit_date, currentTime) ? '!bg-red-100' :
            isNearlyDue(task.limit_date, currentTime) ? '!bg-orange-100' : 
            'bg-gray-50'
        }`}>
            <label className="cursor-pointer flex items-center space-x-2">
                <CompleteTaskComponent
                    task={task}
                    onComplete={completeTask}                
                />
                <p className="text-gray-800">
                    <span className="font-bold text-base sm:text-lg">
                        {task.description == "" ? task.title : `${task.title}: `}
                    </span>
                    <span className="text-gray-600">{task.description}</span>
                    <span className="block text-xs sm:text-sm text-gray-500 mt-1">
                        Fecha/hora límite: {formatDateForInput(task.limit_date)}
                    </span>
                    <EditButtonComponent 
                        task={task} 
                        onEdit={updateTask}
                        disabled={task.completed}
                    />
                    <DeleteButtonComponent 
                        task={task}
                        onDelete={deleteTask} 
                        disabled={task.completed}
                    />
                </p>
            </label>
        </li>
    );
}
