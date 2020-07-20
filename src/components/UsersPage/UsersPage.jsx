import React from 'react';
import classes from './UsersPage.module.scss';
import HeaderContainer from '../common/Header/HeaderContainer';
import LeftMenuContainer from '../common/LeftMenu/LeftMenuContainer';
import RightMenuContainer from '../common/RightMenu/RightMenuContainer';
import BannerBigContainer from '../common/BannerBig/BannerBigContainer';
import TitleContainer from '../common/Title/TitleContainer';
import InnerMenuContainer from '../common/InnerMenu/InnerMenuContainer';
import UsersFilterContainer from './UsersUtils/UsersFilterContainer';
import UsersContainer from './Users/UsersContainer';

const UsersPage = (props) => (
  <div className={classes.wrapper}>
    <HeaderContainer />
    <LeftMenuContainer />
    <RightMenuContainer />
    <div className={classes.block}>
      <BannerBigContainer />
      <InnerMenuContainer />
      <TitleContainer name={'Friends'}/>
      <UsersFilterContainer />
      <UsersContainer />
    </div>
  </div>
);

export default UsersPage;
