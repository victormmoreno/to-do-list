import { useState } from 'react';
import useTaskStore from './store/taskStore';
import ToDoList from './components/ToDoList.jsx';
import { AddTaskButton } from './components/AddTaskButton.jsx';
import { BottomNavigation } from './components/BottomNavigation.jsx';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('all');
    const { taskList, addTask } = useTaskStore();

    return (
        <div className="bg-gray-100 sm:p-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <ToDoList 
                    activeTab={activeTab}
                    taskList={taskList}
                />
            </div>

            <BottomNavigation 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                addButton={<AddTaskButton onAdd={addTask} />}
            />
        </div>
    );
}
  
export default App;
