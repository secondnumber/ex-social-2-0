import React from 'react';
import { connect } from 'react-redux';
import InnerMenu from './InnerMenu';

let mapStateToProps = (state) => {
  return {
    innerMenu: state.innerMenu,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const InnerMenuContainer = connect(mapStateToProps, mapDispatchToProps)(InnerMenu);

export default InnerMenuContainer;