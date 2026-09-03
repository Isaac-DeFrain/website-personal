"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getStoredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span
        className="theme-toggle-icon theme-toggle-icon-sun"
        aria-hidden="true"
      >
        ☀
      </span>
      <span
        className="theme-toggle-icon theme-toggle-icon-moon"
        aria-hidden="true"
      >
        ☾
      </span>
    </button>
  );
}
