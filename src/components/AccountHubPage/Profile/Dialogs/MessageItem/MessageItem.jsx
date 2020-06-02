import React from 'react';
import classes from './MessageItem.module.scss';

const MessageItem = (props) => <li className={classes.messageItem}>{props.message}</li>;

export default MessageItem;
