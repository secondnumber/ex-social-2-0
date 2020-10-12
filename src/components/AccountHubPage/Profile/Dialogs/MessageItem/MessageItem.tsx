import React from 'react';
import classes from './MessageItem.module.scss';

type PropsType = {
    message: string
}

const MessageItem: React.FC<PropsType> = ({ message }) => <li className={classes.messageItem}>{message}</li>;

export default MessageItem;
