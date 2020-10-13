import React from 'react';
import { connect } from 'react-redux';
import BannerBig from './BannerBig';
import {AppStateType} from "../../../redux/reduxStore";
import {BannerBigSocialType, BannerBigStatsType} from "../../../types";

type MapStatePropsType = {
  bannerBig: {
    bannerBigAvatar: any
    bannerBigName: string
    bannerBigStatus: string
    bannerBigStats: Array<BannerBigStatsType>
    bannerBigSocial: Array<BannerBigSocialType>
  };
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    bannerBig: state.bannerBig,
  };
};

const BannerBigContainer = connect(mapStateToProps, null)(BannerBig);

export default BannerBigContainer;