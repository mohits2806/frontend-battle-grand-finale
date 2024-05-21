// components/ToggleMode.js
import React, { useEffect } from 'react';
import '../style.css';

const ToggleMode = ({ mode, toggleMode }) => {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      toggleMode(currentTheme);
    }
  }, [toggleMode]);

  const handleThemeChange = (e) => {
    const newMode = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newMode);
    localStorage.setItem('theme', newMode);
    toggleMode(newMode);
  };

  return (
    <div className="switch">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={mode === 'dark'}
          onChange={handleThemeChange}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default ToggleMode;
