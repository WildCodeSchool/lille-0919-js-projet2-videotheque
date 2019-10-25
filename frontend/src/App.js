import React from "react";
import TopBar from "./components/TopBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MoviePageFilterByTitle from "./components/MoviePageFilterByTitle";
import "./App.css";
import ListMovies from "./components/ListMovies";
import SlideSearchFunction from "./components/SlideSearchFunction";

function App() {
  return (
    <div className="App">
      <TopBar />
      <SlideSearchFunction />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/movieSheet" component={MoviePageFilterByTitle} />
        <Route path="/listMovies" component={ListMovies} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
