import { useEffect, useState } from 'react';

const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const preferColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const localTheme = localStorage.getItem('theme');
    const initialTheme = localTheme || preferColorScheme;
    setTheme(initialTheme);
  }, []);

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
