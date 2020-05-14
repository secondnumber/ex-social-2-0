import React from 'react';
import classes from './ProfilePage.module.scss';
import ProfileContainer from './Profile/ProfileContainer';
import HeaderContainer from './Header/HeaderContainer';
import LeftMenuContainer from './LeftMenu/LeftMenuContainer';
import RightMenuContainer from './RightMenu/RightMenuContainer';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
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
    {/*<Header />*/}
    {/*<LeftMenu />*/}
    <ProfileContainer />
    {/*<RightMenu />*/}
>>>>>>> Stashed changes
=======
    <HeaderContainer />
    <LeftMenuContainer />
    <ProfileContainer />
    <RightMenuContainer />
>>>>>>> Stashed changes
  </div>
);

export default ProfilePage;
