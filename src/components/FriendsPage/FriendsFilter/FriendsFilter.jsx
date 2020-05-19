import React from 'react';
import classes from './FriendsFilter.module.scss';
import FriendsSearch from './FriendsSearch/FriendsSearch';
import FriendsSort from './FriendsSort/FriendsSort';

const FriendsFilter = (props) => {
  let sortList = props.friendFilter.sortList.map((element) => (
    <FriendsSort key={element.id} name={element.name} link={element.link}/>
  ));

  return (
    <div className={classes.wrapper}>
      <FriendsSearch />
      <ul className={classes.list}>{sortList}</ul>
    </div>
  );
};

export default FriendsFilter;
