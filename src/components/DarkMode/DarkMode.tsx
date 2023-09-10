"use client"

import React, { useEffect } from "react";
import { useAtom } from "jotai";
import {darkModeAtom} from '@/stores/darkMode.atom'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

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
    <button className="btn btn-circle fixed left-10 bottom-10" onClick={toggleTheme}>
      {theme === "dark" ? (
        <button><LightModeIcon/></button>
      ) : (
        <button><DarkModeIcon/></button>
      )}
    </button>
  );
};

export default SwitchTheme;

