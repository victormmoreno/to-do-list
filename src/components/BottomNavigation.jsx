import React from 'react';

export function BottomNavigation({ activeTab, setActiveTab, addButton }) {
    return (
        <div className="fixed shadow-lg z-50 w-full max-w-lg -translate-x-1/2 bg-white border border-gray-500 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                <TabButton 
                    active={activeTab === 'all'}
                    onClick={() => setActiveTab('all')}
                    icon={[
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    ]}
                    label="Todas"
                />
                <div className="flex items-center justify-center">
                    {addButton}
                </div>
                <TabButton 
                    active={activeTab === 'completed'}
                    onClick={() => setActiveTab('completed')}
                    icon={[
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                    ]}
                    label="Terminadas"
                />
            </div>
        </div>
    );
}

function TabButton({ active, onClick, icon, label }) {
    return (
        <button 
            onClick={onClick}
            type="button" 
            className={`cursor-pointer inline-flex flex-col items-center justify-center px-5 rounded-full ${active ? 'bg-gray-200' : 'hover:bg-gray-50 dark:hover:bg-gray-800'} group`}>
            <svg 
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 ${active ? 'text-green-600' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-500'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none" 
                viewBox="0 0 22 22">
                {Array.isArray(icon) ? icon.map((path, i) => (
                    <React.Fragment key={i}>{path}</React.Fragment>
                )) : icon}
            </svg>
            <span className="sr-only">{label}</span>
        </button>
    );
}
