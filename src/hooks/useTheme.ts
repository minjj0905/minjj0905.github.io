import { useState } from 'react';

const useTheme = (): [string, () => void] => {
  const preferColorScheme = window && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const localTheme = localStorage.getItem('theme');
  const initialTheme = localTheme || preferColorScheme;

  const [theme, setTheme] = useState(initialTheme);

  const setMode = (mode: string) => {
    localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  return [theme, toggleTheme];
};

export default useTheme;
