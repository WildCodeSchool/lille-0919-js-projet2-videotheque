import React from "react";
import TopBar from "./components/TopBar";
import ActorsList from "./components/ActorsList";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import MoviePageFilterByTitle from "./components/MoviePageFilterByTitle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainPage />
      <SignInForm />
      <MoviePageFilterByTitle />
      <ActorsList />
      <Footer />
    </div>
  );
}

export default App;
