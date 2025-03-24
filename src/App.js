import React, { useState, useEffect } from 'react';
import { Tabs, TabsTrigger, TabsContent } from './components/Tab';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      {/* Dark mode toggle button */}
      <button 
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <Tabs defaultValue="account">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsContent value="account">
          <p className="text-gray-700 dark:text-gray-300">Make changes to your account here.</p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-gray-700 dark:text-gray-300">Change your password here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;