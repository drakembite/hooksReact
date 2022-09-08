import React, { useState, useContext } from 'react'

const themeContext = React.createContext()

export const useThemeContext = () => useContext(themeContext)

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <themeContext.Provider value={{darkMode, setDarkMode}}>
      <div className={darkMode ? 'darkMode': 'lightMode'}>
        {children}
      </div>
    </themeContext.Provider>
  )
}
