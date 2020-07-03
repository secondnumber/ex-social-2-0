import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logout } from '../../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  headers: state.headers,
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
