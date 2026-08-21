'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = useCallback((): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [setTheme, theme]);

  return (
    <button onClick={toggleTheme} type="button">
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
