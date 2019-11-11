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

  updateUser = userObject => {
    this.setState({ user: userObject });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <TopBar
          isLoggedIn={this.state.isLoggedIn}
          user={this.state.user}
          handleLogIn={this.handleLogIn}
        />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route
            path="/movieSheet/:id"
            render={props => (
              <MoviePageFilterByTitle
                {...props}
                user={this.state.user}
                isLoggedIn={this.state.isLoggedIn}
                updateUser={this.updateUser}
              />
            )}
          />
          <Route path="/listMovies/:genreName" component={ListMovies} />
          {/*<Route path="/playlistUser/"component={playlistUser}/>*/}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
