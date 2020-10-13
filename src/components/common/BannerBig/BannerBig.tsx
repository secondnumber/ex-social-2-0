import React from 'react';
import classes from './BannerBig.module.scss';
import BannerStats from './BannerStats/BannerStats';
import BannerSocial from './BannerSocial/BannerSocial';
import {BannerBigSocialType, BannerBigStatsType} from "../../../types";

type PropsType = {
  bannerBig: {
    bannerBigAvatar: any
    bannerBigName: string
    bannerBigStatus: string
    bannerBigStats: Array<BannerBigStatsType>
    bannerBigSocial: Array<BannerBigSocialType>
  };
}

const BannerBig: React.FC<PropsType> = ({ bannerBig }) => {
  let statsList = bannerBig.bannerBigStats.map((element) => (
    <BannerStats key={element.id} value={element.value} label={element.label} />
  ));

  let socialList = bannerBig.bannerBigSocial.map((element) => (
    <BannerSocial key={element.id} name={element.name}/>
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.cover}></div>
      <div className={classes.block}>
        <img className={classes.avatar} src={bannerBig.bannerBigAvatar} />
        <div className={classes.label}>
          <p className={classes.name}>{bannerBig.bannerBigName}</p>
          <p className={classes.status}>{bannerBig.bannerBigStatus}</p>
        </div>
        <section className={classes.info}>
          <ul className={classes.stats}>{statsList}</ul>
          <ul className={classes.social}>
            {socialList}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BannerBig;
