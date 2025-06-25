'use client';
import React from 'react';
import { useTheme } from './themeContext';
import DarkModeToggle from './components/DarkModeToggle'; 


export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{
      padding: '10px',
      borderRadius: '999px',
      border: 'none',
      background: theme === 'dark' ? '#fff' : '#000',
      color: theme === 'dark' ? '#000' : '#fff',
      cursor: 'pointer',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 999,
    }}>
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
