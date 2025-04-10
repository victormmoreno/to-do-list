export function DeleteButtonView({ 
    onClick,
    disabled,
    children
}) {
    return (
        <button 
            type="button" 
            onClick={onClick}
            disabled={disabled}
            className={`p-2.5 text-xs font-medium text-center inline-flex items-center rounded-full focus:ring-4 focus:outline-none ${
                disabled 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'cursor-pointer bg-red-500 text-white hover:bg-red-600 focus:ring-red-300'
            }`}
        >
            {children}
        </button>
    );
}
