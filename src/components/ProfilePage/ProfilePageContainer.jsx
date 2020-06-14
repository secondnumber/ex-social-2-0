import React from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../redux/reducers/profileReducer';

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    } this.props.getUser(userId);
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

let WithUrlDataContainerComponent = withRouter(ProfilePageContainer);

export default connect(mapStateToProps, { getUser })(
  WithUrlDataContainerComponent
);
