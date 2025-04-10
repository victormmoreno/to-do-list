export function AddTaskButtonView({ 
    onClick,
    children
}) {
    return (
        <button 
            onClick={onClick} 
            className="cursor-pointer bg-green-500 text-white rounded-full hover:bg-green-600 text-sm p-2.5 text-center"
        >
            {children}
        </button>
    );
}
