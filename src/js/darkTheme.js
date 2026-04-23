// Modo noche centralizado.
export function activateNightMode() {
    document.body.classList.toggle('dark-mode');
    
    // Persistir preferencia en localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Inicializar tema al cargar
// Si no hay preferencia guardada, usamos 'dark' por defecto.
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}
