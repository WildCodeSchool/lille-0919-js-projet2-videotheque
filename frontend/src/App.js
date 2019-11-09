import React from "react";
import TopBar from "./components/TopBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MoviePageFilterByTitle from "./components/MoviePageFilterByTitle";
import "./App.css";
import ListMovies from "./components/ListMovies";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/movieSheet/:id" component={MoviePageFilterByTitle} />
          <Route path="/listMovies/:genreName" component={ListMovies} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
