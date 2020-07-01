import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData, logout } from '../../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  headers: state.headers,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
