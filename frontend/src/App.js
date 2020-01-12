import React from "react";
import TopBar from "./components/TopBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import MoviePageFilterByTitle from "./components/MoviePageFilterByTitle";
import "./App.css";
import ListMovies from "./components/ListMovies";
import { Provider } from 'react-redux'
import store from './Store/store'

import UserAccount from "./components/UserAccount";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { AnimatedSwitch } from "react-router-transition";

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

  createNotification = (type, messageString, title) => {
    const duration = 2000;
    switch (type) {
      case "success":
        NotificationManager.success(messageString, title, duration);
        break;
      case "info":
        NotificationManager.info(messageString, title, duration);
        break;
      case "warning":
        NotificationManager.warning(messageString, title, duration);
        break;
      case "error":
        NotificationManager.error(messageString, title, duration);
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <TopBar
          isLoggedIn={this.state.isLoggedIn}
          user={this.state.user}
          handleLogIn={this.handleLogIn}
          handleLogOut={this.handleLogOut}
          notification={this.createNotification}
        />

        <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={MainPage} />
            <Route
              path="/movieSheet/:id"
              render={props => (
                <MoviePageFilterByTitle
                  {...props}
                  user={this.state.user}
                  isLoggedIn={this.state.isLoggedIn}
                  updateUser={this.updateUser}
                  notification={this.createNotification}
                />
              )}
            />
            <Route path="/listMovies/:genreName" component={ListMovies} />
            <Route
              path="/userAccount"
              render={props => (
                <UserAccount
                  {...props}
                  user={this.state.user}
                  isLoggedIn={this.state.isLoggedIn}
                  updateUser={this.updateUser}
                  notification={this.createNotification}
                />
              )}
            />
          </AnimatedSwitch>
        </Switch>
        <Footer />

        <NotificationContainer />
      </div>
      </Provider>
    );
  }
}

export default App;