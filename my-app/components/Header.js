import React from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="text-center py-6">
      <DarkModeToggle />
      <h1 className="text-2xl dark:text-white">Bienvenue sur mon site</h1>
    </header>
  );
}
