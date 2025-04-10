export function EmptyStateView({ activeTab }) {
    return (
        <li className="text-center py-8 text-gray-500">
            {activeTab === 'completed' 
                ? 'No hay tareas completadas hasta el momento'
                : 'No hay tareas pendientes'}
        </li>
    );
}
