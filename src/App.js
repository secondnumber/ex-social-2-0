import React, {Component, Suspense} from 'react';
import classes from './App.module.scss';
import LoginPage from './components/LoginPage/LoginPage';
import {
  Switch,
  Route,
  withRouter,
  BrowserRouter as Router,
} from 'react-router-dom';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import AccountPageContainer from './components/AccountHubPage/AccountPageContainer';
import TimelinePageContainer from './components/TimelinePage/TimelinePageContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/reducers/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import store from './redux/reduxStore';
import { Redirect } from "react-router-dom";
const MoviesPageContainer = React.lazy(() => import('./components/MoviesPage/MoviesPageContainer'));

class App extends Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
      alert(promiseRejectionEvent);
    }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

    render() {
    if (!this.props.initialized) {
      return (
        <div className={classes.wrapper}>
          <Preloader />
        </div>
      );
    }
    return (
      <Switch>
          <Route exact path="/">
              <Redirect from="/" to="/login" />
          </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
          <Route path="/register">
              <LoginPage />
          </Route>
        <Route path="/timeline">
          <TimelinePageContainer />
        </Route>
        <Route path="/movies">
            <Suspense fallback={<Preloader />}>
          <MoviesPageContainer />
            </Suspense>
        </Route>
        <Route path="/users">
          <UsersPageContainer />
        </Route>
        <Route path="/account">
          <AccountPageContainer />
        </Route>
        <Route path="/profile/:userId?">
          <ProfilePageContainer />
        </Route>
      </Switch>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);

const MainApp = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  );
};

export default MainApp;