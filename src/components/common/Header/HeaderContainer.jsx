import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../../redux/reducers/authReducer';
import {toggleIsFetching} from "../../../redux/reducers/friendsReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login);
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

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(HeaderContainer);
