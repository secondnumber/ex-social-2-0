import React from 'react';
import ProfilePage from './ProfilePage';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../redux/reducers/profileReducer';

class ProfilePageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
