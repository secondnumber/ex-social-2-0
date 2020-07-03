import React from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../redux/reducers/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUser(userId);
  }

  render() {
    return (
      <div>
        <ProfilePage
            {...this.props}
            profile={this.props.profile.userProfile} />
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
  connect(mapStateToProps, { getUser }),
  withRouter, withAuthRedirect
)(ProfilePageContainer);
