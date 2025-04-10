export function SortView({ 
    sortField, 
    sortDirection, 
    onFieldChange, 
    onDirectionChange 
}) {
    return (
        <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
                <label htmlFor="sort-field" className="mr-2 text-sm font-medium text-gray-700">
                    Ordenar por:
                </label>
                <select
                    id="sort-field"
                    value={sortField}
                    onChange={(e) => onFieldChange(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
                >
                    <option value="completed">Estado</option>
                    <option value="title">Nombre</option>
                    <option value="limit_date">Fecha límite</option>
                </select>
            </div>
            <button
                onClick={onDirectionChange}
                className="flex items-center text-sm text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm text-sm px-2 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                title={sortDirection === 'asc' ? 'Ascendente' : 'Descendente'}
            >
                {sortDirection === 'asc' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                    </svg>
                )}
            </button>
        </div>
    );
}
