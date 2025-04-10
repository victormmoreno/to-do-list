export function EditButtonView({ 
    onOpen,
    disabled,
    children
}) {
    return (
        <>
            <button 
                type="button" 
                onClick={onOpen}
                disabled={disabled}
                className={`p-2.5 font-medium text-center inline-flex items-center rounded-full focus:ring-4 focus:outline-none ${
                    disabled 
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                        : 'cursor-pointer bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300'
                }`}
            >
                {children}
            </button>
        </>
    );
}
