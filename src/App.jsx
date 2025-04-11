import { useState } from 'react';
import useTaskStore from './store/taskStore';
import ToDoList from './components/ToDoList.jsx';
import { AddTaskButton } from './components/AddTaskButton.jsx';
import { BottomNavigation } from './components/BottomNavigation.jsx';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function ActualAppContent() {
  const { darkMode } = useTheme();
    const [activeTab, setActiveTab] = useState('all');
    const { taskList, addTask } = useTaskStore();

    return (
        <div className={`bg-gray-100 dark:bg-gray-600 sm:p-8 min-h-screen transition-colors duration-300`}>
          <div className={`bg-gray-100 dark:bg-gray-500 p-2 sm:p-6 rounded-lg shadow-lg mb-4`}>
            <div >
                <ThemeToggle />
            </div>
          </div>
            <ToDoList 
                activeTab={activeTab}
                taskList={taskList}
            />


            <BottomNavigation 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                addButton={<AddTaskButton onAdd={addTask} />}
            />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <ActualAppContent />
        </ThemeProvider>
    );
}
  
export default App;
