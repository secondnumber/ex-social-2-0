import React from 'react';
import LoadImage from '../../../assets/Common/Preloader.svg';
import classes from './Preloader.module.scss';

const Preloader = (props) => (
  <div>
    <img src={LoadImage} />
  </div>
);

export default Preloader;
