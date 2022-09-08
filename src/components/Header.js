import React from 'react'
import { useThemeContext } from './../context/ThemeContext'

export default function Header() {
  const theme = useThemeContext()

  const handleClick = () => theme.setDarkMode(!theme.darkMode)

  return (
    <div>
      <h1>ReactHooks</h1>
      <button onClick={handleClick}>{theme.darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}
