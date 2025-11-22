import { useState, useEffect } from "react";
import { Theme } from "@/types";
import { storage } from "@/utils/storage";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => storage.getTheme());

  useEffect(() => {
    storage.setTheme(theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
