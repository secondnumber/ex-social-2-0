import React from 'react';
import { connect } from 'react-redux';
import BannerBig from './BannerBig';

let mapStateToProps = (state) => {
  return {
    bannerBig: state.bannerBig,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const BannerBigContainer = connect(mapStateToProps, mapDispatchToProps)(BannerBig);

export default BannerBigContainer;