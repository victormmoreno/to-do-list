import React  from 'react';
import { Task } from '../types/task';
import { TaskItem } from './Task/TaskItem';
import { AddTaskButton } from './AddTaskButton';
// import useTaskStore from '../store/taskStore';

interface ToDoListProps {
    activeTab: string;
    taskList: Task[];
}

const ToDoList: React.FC<ToDoListProps> = ({activeTab, taskList}) => {
    const filteredTasks = taskList.filter(task => {
        switch (activeTab) {
            case 'completed':
                return task.completed;
            case 'pending':
                return !task.completed;
            default:
                return true;
        }
    });

    return (
        <div className="space-y-4">
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
          
        </div>
    );
};
    
export default ToDoList;