import React from 'react'
import { ThemeConsumer } from '../contexts/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';


function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme} className='toggle-theme'>{theme === 'light' ? <FiMoon /> : <FiSun /> }</button>
      }}
    </ThemeConsumer>
  )
}

export default ToggleTheme