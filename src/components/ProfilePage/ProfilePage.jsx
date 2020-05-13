import React from 'react';
import classes from './ProfilePage.module.scss';
import Header from './Header/Header';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import ProfileContainer from './Profile/ProfileContainer';

const ProfilePage = (props) => (
  <div className={classes.wrapper}>
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
  </div>
);

export default ProfilePage;
