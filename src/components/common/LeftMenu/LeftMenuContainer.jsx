import React from 'react';
import { connect } from 'react-redux';
import LeftMenu from './LeftMenu';

let mapStateToProps = (state) => {
  return {
    leftMenu: state.leftMenu,
  };
};

const LeftMenuContainer = connect(mapStateToProps)(LeftMenu);

export default LeftMenuContainer;
