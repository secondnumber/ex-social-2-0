import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../../redux/reducers/authReducer';
import { usersAPI } from '../../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.isAuthCurrentUser().then((response) => {
      if (response.resultCode === 0) {
        this.props.setAuthUserData(response.data.id);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  headers: state.headers,
  auth: state.auth,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
