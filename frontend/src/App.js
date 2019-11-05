import React from "react";
import TopBar from "./components/TopBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import { Switch, Route } from "react-router-dom";
import MoviePageFilterByTitle from "./components/MoviePageFilterByTitle";
import "./App.css";
import ListMovies from "./components/ListMovies";
import SlideSearchFunction from "./components/SlideSearchFunction";
import ActorsList from "./components/ActorsList";

function App() {
  return (
    <div className="App">
      <TopBar />
      <SignInForm />
      <SlideSearchFunction />
      <MainPage />
      <MoviePageFilterByTitle />
      <ActorsList />
      <ListMovies />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/movieSheet" component={MoviePageFilterByTitle} />
        <Route path="/listMovies/:genreName" component={ListMovies} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
