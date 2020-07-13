import React from 'react';
import classes from './UsersFilter.module.scss';
import UsersSearch from './UsersSearch/UsersSearch';
import UsersSort from './UsersSort/UsersSort';
import FriendsView from './UsersView/FriendsView';

const UsersFilter = (props) => {
  let sortList = props.friendFilter.sortList.map((element) => (
    <UsersSort key={element.id} name={element.name} link={element.link}/>
  ));
  let viewList = props.friendFilter.viewList.map((element) => (
    <FriendsView key={element.id} icon={element.icon} link={element.link}/>
  ));

  return (
    <div className={classes.wrapper}>
      <UsersSearch />
      <ul className={classes.sortList}>{sortList}</ul>
      <ul className={classes.viewList}>{viewList}</ul>
    </div>
  );
};

export default UsersFilter;
