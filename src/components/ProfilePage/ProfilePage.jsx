import React from 'react';
import classes from './ProfilePage.module.scss';
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import LeftMenuContainer from './LeftMenu/LeftMenuContainer';
import RightMenuContainer from './RightMenu/RightMenuContainer';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <Header state={props.state} />
    <LeftMenu state={props.state} />
    <Profile
      state={props.state}
      store={props.store}
    />
    <RightMenu state={props.state} />
=======
=======
>>>>>>> 6fe16831e054a48bc371604709a6085bbe95971a
    {/*<Header />*/}
    {/*<LeftMenu />*/}
    <ProfileContainer />
    {/*<RightMenu />*/}
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
    <HeaderContainer />
    <LeftMenuContainer />
    <ProfileContainer />
    <RightMenuContainer />
>>>>>>> Stashed changes
=======
>>>>>>> 6fe16831e054a48bc371604709a6085bbe95971a
  </div>
);

export default ProfilePage;
