import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Set the default theme to "light"

  const playSound = (mode) => {
    const audio = new Audio(`path/to/${mode}-mode-sound.mp3`);
    audio.play();
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = () => {
      const newTheme = darkModeMediaQuery.matches ? "dark" : "light";
      setTheme(newTheme);
      playSound(newTheme);
    };

    darkModeMediaQuery.addListener(handleChange);

    return () => {
      darkModeMediaQuery.removeListener(handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
