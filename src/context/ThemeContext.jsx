import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const savedPreference = localStorage.getItem('darkMode');
    return savedPreference ? JSON.parse(savedPreference) : false;
  });

  useEffect(() => {
    // console.log('Dark mode changed to:', darkMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Update root class
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      // console.log('Added dark class to HTML element');
    } else {
      html.classList.remove('dark');
      // console.log('Removed dark class from HTML element');
    }
    // console.log('Current HTML classes:', html.className);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
