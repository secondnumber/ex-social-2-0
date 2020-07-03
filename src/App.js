import React, { Component } from 'react';
import classes from './App.module.scss';
import LoginPage from './components/LoginPage/LoginPage';
import { Switch, Route, withRouter } from 'react-router-dom';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import AccountPageContainer from './components/AccountHubPage/AccountPageContainer';
import TimelinePageContainer from './components/TimelinePage/TimelinePageContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/reducers/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import FriendsPageContainer from './components/FriendsPage/FriendsPageContainer';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
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
          <LoginPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/timeline">
          <TimelinePageContainer />
        </Route>
        <Route path="/friends">
          <FriendsPageContainer />
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

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
