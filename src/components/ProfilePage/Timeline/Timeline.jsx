import React from 'react';
import classes from './Timeline.module.scss';
import Post from './Post/Post';

const Timeline = () => {
  let postsData = [
    {
      id: 1,
      author: 'Marina Valentine',
      time: '29 minutes ago',
      message:
        'Hi to all! Remembercomments that today I\'ll be livestreaming along with @NekoBebop the new character of the brand new Xenowatch patch "Anya Darkness". See you there!',
      reactions: 15,
      comments: 1,
      shares: 1,
    },
    {
      id: 2,
      author: 'Marina Valentine',
      time: '17 hours ago',
      message: 'This is a dream come true, thanks to all for the support!!!',
      reactions: 21,
      comments: 4,
      shares: 3,
    },
    {
      id: 3,
      author: 'Marina Valentine',
      time: '2 days ago',
      message:
        "Here's a sneak peek of the official box cover art for Machine Wasteland II! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!",
      reactions: 9,
      comments: 0,
      shares: 0,
    },
  ];

  return (
    <div className={classes.wrapper}>
      <h3>MY PROFILE</h3>
      <h2>Timelime</h2>
      <ul className={classes.postsArea}>
        <Post
          message={postsData[0].message}
          author={postsData[0].author}
          time={postsData[0].time}
          reactions={postsData[0].reactions}
          comments={postsData[0].comments}
          shares={postsData[0].shares}
        />
        <Post
          message={postsData[1].message}
          author={postsData[1].author}
          time={postsData[1].time}
          reactions={postsData[1].reactions}
          comments={postsData[1].comments}
          shares={postsData[1].shares}

        />
        <Post
          message={postsData[2].message}
          author={postsData[2].author}
          time={postsData[2].time}
          reactions={postsData[2].reactions}
          comments={postsData[2].comments}
          shares={postsData[2].shares}
        />
      </ul>
    </div>
  );
};

export default Timeline;
