'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer"
      title="Toggle Theme"
      onClick={() => toggleTheme()}
    >
      <i className="bi bi-lightbulb-fill"></i>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
