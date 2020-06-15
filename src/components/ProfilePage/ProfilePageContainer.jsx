import React from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../redux/reducers/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUser(userId);
  }

  render() {
    return (
      <div>
        <ProfilePage {...this.props} profile={this.props.profile.userProfile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
});

export default compose(
  connect(mapStateToProps, { getUser }),
  withRouter,
  withAuthRedirect
)(ProfilePageContainer);
