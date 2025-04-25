import React from 'react';

interface BottomNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  addButton: React.ReactNode;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  setActiveTab,
  addButton
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg">
      <div className="flex justify-around items-center p-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setActiveTab('all')}
        >
          Todas
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'pending' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setActiveTab('pending')}
        >
          Pendientes
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'completed' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
          onClick={() => setActiveTab('completed')}
        >
          Completadas
        </button>
      </div>
      {addButton}
    </div>
  );
};