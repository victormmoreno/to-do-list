export const formatDateForInput = (date) => {
    if (!date) return '';
    const d = new Date(date);
    // Formato YYYY-MM-DDTHH:MM manteniendo hora local
    const pad = num => num.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
