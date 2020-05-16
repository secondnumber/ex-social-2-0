import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

const FriendsContainer = connect()(Friends);

export default FriendsContainer;
