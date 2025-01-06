import React, { createContext, useEffect, useState } from "react";

const defaultContext = {
  isDarkMode: false,
  toggleColorMode: () => {},
};

export const ThemeContext = createContext(defaultContext);

export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(defaultContext.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleColorMode: () => setDarkMode((prev) => !prev),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
