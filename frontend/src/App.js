import React from "react";
import TopBar from "./components/TopBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MoviePageFilterByTitle from "./components/MoviePageFilterByTitle";
import "./App.css";
import ListMovies from "./components/ListMovies";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={MainPage} />
          <Route path="/movieSheet/:id" component={MoviePageFilterByTitle} />
          <Route path="/listMovies/:genreName" component={ListMovies} />
        </AnimatedSwitch>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
