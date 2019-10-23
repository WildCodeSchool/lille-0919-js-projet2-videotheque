import React from "react";
import TopBar from "./components/TopBar";
import "./App.css";
import ActorsList from "./components/ActorsList";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainPage />
      <ActorsList />
    </div>
  );
}

export default App;
