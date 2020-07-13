import React from 'react';
import classes from './Post.module.scss';

const Post = (props) => (
  <li className={classes.item}>
    <div className={classes.avatar}>
      <img className={classes.image} src={props.avatar} alt={'Avatar'} />
      <p>
        <p className={classes.author}>{props.author}</p>
        <span>{props.time}</span>
      </p>
    </div>
    <button className={classes.toggle}></button>
    <p className={classes.text}>{props.message}</p>
    <span className={classes.likes}>{props.reactions} Likes</span>
    <span className={classes.comments}>{props.comments} Comments</span>
    <span className={classes.shares}>{props.shares} Shares</span>
    <div className={classes.buttons}>
      <button className={classes.button}>
        <svg
          className={classes.svg}
          viewBox="0 0 20 20"
          preserveAspectRatio="xMinYMin meet"
          width="20px"
        >
          <path d="M15.896,19.999c-0.01,0-0.021,0-0.03,0H2.826C1.268,19.999,0,18.743,0,17.201v-6.302c0-1.543,1.269-2.797,2.826-2.797h2.096l3.391-7.515C8.473,0.229,8.83,0,9.223,0c2.063,0,3.742,1.659,3.742,3.698l0.026,2.3h4.996c0.152-0.003-0.149-0.023,0,0c0.753,0.111,1.962,0.245,1.999,1c0.037,0.757-0.011,2.143,0,3.003l-1.295,7.624C18.483,18.982,17.284,19.999,15.896,19.999z M6.995,18.005h8.881c0.003,0,0.007,0,0.01,0c0.418,0,0.77-0.292,0.83-0.684l1.262-8.106c0.031-0.205-0.02-0.412-0.145-0.583c-0.132-0.178-0.621-0.601-0.845-0.634c-0.045-0.008,0.045-0.006,0,0h-4.996c-0.553,0-1-1.451-1-2.001l-0.026-2.3c0-0.733-0.477-1.36-1.144-1.6l-2.828,6.9V18.005z M2.997,10c-0.456,0-0.999,0.457-0.999,0.899v6.302c0,0.442,0.371,0.804,0.827,0.804h2.17V10H2.997z"></path>
        </svg>
        <span className={classes.label}>Like!</span>
      </button>
      <button className={classes.button}>
        <svg
          className={classes.svg}
          viewBox="0 0 20 20"
          preserveAspectRatio="xMinYMin meet"
          width="20px"
        >
          <path d="M15,2c1.654,0,3,1.257,3,2.803v6.404c0,1.546-1.346,2.803-3,2.803H7.98H7.508l-0.422,0.211L2,16.764v-5.557V10V4.803C2,3.257,3.346,2,5,2H15 M15,0H5C2.238,0,0,2.15,0,4.803V10v1.207V20l7.98-3.99H15c2.762,0,5-2.15,5-4.803V4.803C20,2.15,17.762,0,15,0L15,0z"></path>
          <g>
            <path d="M14,5H6C5.447,5,5,5.448,5,6c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1C15,5.448,14.553,5,14,5z M10,9H6c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S10.553,9,10,9z"></path>
          </g>
        </svg>
        <span className={classes.label}>Comment</span>
      </button>
      <button className={classes.button}>
        <svg
          className={classes.svg}
          viewBox="0 0 20 20"
          preserveAspectRatio="xMinYMin meet"
          width="20px"
        >
          <path d="M15.336,12.6c-0.984,0-1.876,0.399-2.536,1.04l-4.602-2.714c0.077-0.297,0.13-0.604,0.13-0.925s-0.054-0.628-0.13-0.925l4.598-2.717C13.457,7,14.35,7.4,15.336,7.4C17.356,7.4,19,5.741,19,3.7S17.356,0,15.336,0s-3.665,1.66-3.665,3.7c0,0.321,0.054,0.628,0.13,0.925L7.203,7.342C6.543,6.7,5.651,6.3,4.665,6.3C2.644,6.3,1,7.959,1,10c0,2.04,1.645,3.699,3.665,3.699c0.986,0,1.878-0.399,2.538-1.041l4.601,2.713c-0.078,0.299-0.132,0.606-0.132,0.93c0,2.04,1.645,3.699,3.665,3.699S19,18.341,19,16.301C19,14.26,17.356,12.6,15.336,12.6z M15.336,2c0.921,0,1.67,0.763,1.67,1.7s-0.749,1.7-1.67,1.7c-0.922,0-1.672-0.763-1.672-1.7S14.414,2,15.336,2z M4.665,11.699c-0.921,0-1.671-0.763-1.671-1.699c0-0.938,0.75-1.7,1.671-1.7s1.67,0.763,1.67,1.7C6.335,10.937,5.586,11.699,4.665,11.699z M15.336,18c-0.922,0-1.672-0.763-1.672-1.699c0-0.308,0.087-0.592,0.228-0.841c0.003-0.005,0.006-0.008,0.009-0.012c0.003-0.005,0.002-0.01,0.005-0.015c0.292-0.497,0.821-0.834,1.431-0.834c0.921,0,1.67,0.763,1.67,1.701C17.006,17.237,16.257,18,15.336,18z"></path>
        </svg>
        <span className={classes.label}>Share</span>
      </button>
    </div>
  </li>
);

export default Post;
