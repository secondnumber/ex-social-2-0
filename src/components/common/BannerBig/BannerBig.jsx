import React from 'react';
import classes from './BannerBig.module.scss';
import BannerStats from './BannerStats/BannerStats';

const BannerBig = (props) => {
  let statsList = props.bannerBig.bannerBigStats.map((element) => (
    <BannerStats
      key={element.id}
      posts={element.posts}
      friends={element.friends}
      visits={element.visits}
      flag={element.flag}
      country={element.country}
    />
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
          <div className={classes.social}></div>
        </section>
      </div>
    </div>
  );
};

export default BannerBig;
