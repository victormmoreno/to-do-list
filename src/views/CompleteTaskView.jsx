export function CompleteTaskView({ 
    taskId,
    isCompleted,
    onChange
}) {
    return (
        <label htmlFor={taskId} className="flex items-center cursor-pointer">
            <input 
                id={taskId}
                type="checkbox"
                checked={isCompleted}
                onChange={onChange}
                className="sr-only peer"
            />
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors duration-200">
                {isCompleted && (
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
        </label>
    );
}
