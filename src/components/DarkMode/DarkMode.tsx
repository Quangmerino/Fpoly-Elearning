import { useAtom } from "jotai";
import React, { useEffect } from "react";
import {darkModeAtom} from '@/stores/darkMode.atom'

const SwitchTheme = () => {
  const [theme, setTheme] = useAtom(darkModeAtom);

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);


  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "dark" ? (
        <button></button>
      ) : (
        <button></button>
      )}
    </button>
  );
};

export default SwitchTheme;

