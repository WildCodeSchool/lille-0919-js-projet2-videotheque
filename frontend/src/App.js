import React from "react";
import TopBar from "./components/TopBar";
import ActorsList from "./components/ActorsList";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MoviePageFilterByTitle from "./components/MoviePageFilterByTitle";
import "./App.css";
import SlideSearchFunction from "./components/SlideSearchFunction";

function App() {
  return (
    <div className="App">
      <TopBar />
      <SlideSearchFunction />
      <MainPage />
      <MoviePageFilterByTitle />
      <ActorsList />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/movieSheet" component={MoviePageFilterByTitle} />
        <Route path="/actorsList" component={ActorsList} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
