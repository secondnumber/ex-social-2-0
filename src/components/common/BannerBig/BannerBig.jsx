import React from 'react';
import classes from './BannerBig.module.scss';
import BannerStats from './BannerStats/BannerStats';
import BannerSocial from './BannerSocial/BannerSocial';

const BannerBig = (props) => {
  let statsList = props.bannerBig.bannerBigStats.map((element) => (
    <BannerStats key={element.id} value={element.value} label={element.label} />
  ));

  let socialList = props.bannerBig.bannerBigSocial.map((element) => (
    <BannerSocial key={element.id} name={element.name} hint={element.hint} />
  ));

  return (
    <div className={classes.wrapper}>
      <div className={classes.cover}></div>
      <div className={classes.block}>
        <img className={classes.avatar} src={props.bannerBig.bannerBigAvatar} />
        <section className={classes.info}>
          <ul className={classes.stats}>{statsList}</ul>
          <div className={classes.label}>
            <p className={classes.name}>{props.bannerBig.bannerBigName}</p>
            <p className={classes.status}>{props.bannerBig.bannerBigStatus}</p>
          </div>
          <ul className={classes.social}>
            {socialList}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BannerBig;
