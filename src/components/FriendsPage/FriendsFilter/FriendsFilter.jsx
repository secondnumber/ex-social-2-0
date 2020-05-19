import React from 'react';
import classes from './FriendsFilter.module.scss';
import FriendsSearch from './FriendsSearch/FriendsSearch';
import FriendsSort from './FriendsSort/FriendsSort';
import FriendsView from './FriendsView/FriendsView';

const FriendsFilter = (props) => {
  let sortList = props.friendFilter.sortList.map((element) => (
    <FriendsSort key={element.id} name={element.name} link={element.link}/>
  ));
  let viewList = props.friendFilter.viewList.map((element) => (
    <FriendsView key={element.id} icon={element.icon} link={element.link}/>
  ));

  return (
    <div className={classes.wrapper}>
      <FriendsSearch />
      <ul className={classes.sortList}>{sortList}</ul>
      <ul className={classes.viewList}>{viewList}</ul>
    </div>
  );
};

export default FriendsFilter;
