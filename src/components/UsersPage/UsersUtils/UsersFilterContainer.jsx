import React from 'react';
import { connect } from 'react-redux';
import UsersFilter from './UsersFilter';

let mapStateToProps = (state) => {
  return {
    friendFilter: state.friendFilter,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const UsersFilterContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFilter);

export default UsersFilterContainer;