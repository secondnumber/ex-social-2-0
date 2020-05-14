import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

let mapStateToProps = (state) => {
  return {
    headers: state.headers,
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;
