import React, { useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header>
        <h1>Todo List</h1>
        <div className="container">
          <input
            className="search"
            type="text"
            placeholder="Search todos"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button
            onClick={toggleTheme}
            className={`toggleBtn ${darkMode ? "lightbtn" : "darkbtn"}`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}{" "}
            <i className={`fa-regular fa-${darkMode ? "sun" : "moon"}`}></i>
          </button>
        </div>
      </header>
      <Table searchQuery={searchQuery} />
    </div>
  );
}

export default App;
