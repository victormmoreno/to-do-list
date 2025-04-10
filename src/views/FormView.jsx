export function FormView({ 
    formData,
    errors,
    handleChange,
    handleSubmit,
    onCancel,
    isValid
}) {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-gray-700 mb-2">Título*</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.title ? 'border-red-500' : ''}`}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div>
                <label className="block text-gray-700 mb-2">Descripción</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows="3"
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1">Fecha Límite*</label>
                <input
                    type="datetime-local"
                    name="limit_date"
                    value={formData.limit_date}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded ${errors.limit_date ? 'border-red-500' : ''}`}
                />
                {errors.limit_date && <p className="text-red-500 text-sm mt-1">{errors.limit_date}</p>}
            </div>
            <div className="flex justify-end space-x-2">
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
                    Cancelar
                </button>
                <button
                    type="submit"
                    className={`px-4 py-2 text-white rounded ${isValid ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!isValid}
                >
                    Guardar
                </button>
            </div>
        </form>
    );
}
