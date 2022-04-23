import "./App.css";
import SearchBar from "./components/searchBar";
import React, { useState, createContext } from "react";
import VideoList from "./components/videoList";
import { Outlet } from "react-router-dom";

export const AppContext = createContext();
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
        <SearchBar />
        <Outlet />
        <VideoList />
      </AppContext.Provider>
    </div>
  );
}

export default App;
