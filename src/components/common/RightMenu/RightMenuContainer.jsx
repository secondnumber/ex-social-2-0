import React from 'react';
import { connect } from 'react-redux';
import RightMenu from './RightMenu';

let mapStateToProps = (state) => {
  return {
    rightMenu: state.rightMenu,
  };
};

const RightMenuContainer = connect(mapStateToProps)(RightMenu);

export default RightMenuContainer;
