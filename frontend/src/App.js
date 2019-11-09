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
    this.state = { isLoggedIn: false, user: {} };
  }

  handleLogIn = userObject => {
    this.setState({ user: userObject, isLoggedIn: true });
  };

  handleLogOut = () => {
    this.setState({ user: {}, isLoggedIn: false });
  };

  render() {
    return (
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/movieSheet/:id" component={MoviePageFilterByTitle} />
          <Route path="/listMovies/:genreName" component={ListMovies} />
          {/*<Route path="/playlistUser/"component={playlistUser}/>*/}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
