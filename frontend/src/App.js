import React from "react";
import "./App.css";
import PlaylistUser from "./components/PlaylistUser";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div className="App">
      <TopBar />
      <PlaylistUser />
    </div>
  );
}

export default App;
