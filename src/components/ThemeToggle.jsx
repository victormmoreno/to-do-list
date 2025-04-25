import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="cursor-pointer rounded-full relative inline-flex items-center justify-center p-0.5 py-2.5 px-5 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-gray-600 to-yellow-500 dark:from-yellow-600 dark:to-gray-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      {darkMode ? (
        <span className="text-yellow-300 ">☀️</span>
      ) : (
        <span className="text-gray-600 ">🌙</span>
      )}
    </button>
  );
}