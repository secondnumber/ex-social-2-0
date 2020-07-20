import React from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser, savePhoto } from '../../redux/reducers/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfilePageContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUser(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div>
        <ProfilePage
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile.userProfile}
          defaultAvatar={this.props.profile.defaultAvatar}
          savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUser, savePhoto }),
  withRouter,
  withAuthRedirect
)(ProfilePageContainer);
