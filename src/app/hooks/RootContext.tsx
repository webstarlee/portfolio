'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

interface RootContextType {
  theme: string | 'dark';
  themeToggle: (_theme: string) => void;
}

const rootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('dark');

  const themeToggle = (_theme: string) => {
    setTheme(_theme);
    localStorage.setItem('theme', _theme);
    applyTheme(_theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
        setTheme('dark')
        applyTheme('dark');
    } else {
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <rootContext.Provider
      value={{
        theme,
        themeToggle
      }}
    >
      {children}
    </rootContext.Provider>
  );
};

export const useRoot = () => {
  const context = useContext(rootContext);
  if (!context) {
    throw new Error('useRoot must be used within a RootProvider');
  }
  return context;
};