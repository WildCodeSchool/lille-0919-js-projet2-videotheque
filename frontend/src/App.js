import React from "react";
import "./App.css";
import ActorsList from "./components/ActorsList";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <ActorsList />
      <MainPage />;
    </div>
  );
}

export default App;
