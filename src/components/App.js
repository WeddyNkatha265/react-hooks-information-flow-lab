// App.js
import React, { useState } from "react";
import Header from "./Header"; // Import the Header component
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
