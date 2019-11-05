import React from "react";
import TopBar from "./components/TopBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MovieSheet from "./components/MovieSheet";
import "./App.css";
import ListMoviesByGenre from "./components/ListMoviesByGenre";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/movieSheet" component={MovieSheet} />
        <Route
          path="/listMoviesByGenre/:genreName"
          component={ListMoviesByGenre}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
