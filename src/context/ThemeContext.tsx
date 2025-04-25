// import React, { createContext, useContext, useState, useEffect } from 'react';

// interface ThemeContextType {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     try {
//       const savedTheme = localStorage.getItem('darkMode');
//       return savedTheme ? JSON.parse(savedTheme) : false;
//     } catch {
//       return false;
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem('darkMode', JSON.stringify(darkMode));
//       if (darkMode) {
//         document.documentElement.classList.add('dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//       }
//     } catch (error) {
//       console.error('Error al manejar el modo oscuro:', error);
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(prev => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
//   }
//   return context;
// };