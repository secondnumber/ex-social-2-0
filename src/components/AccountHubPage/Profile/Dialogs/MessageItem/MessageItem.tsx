import React from 'react';
import classes from './MessageItem.module.scss';

type PropsType = {
    id: number
    message: string
}

const MessageItem: React.FC<PropsType> = ({ id, message }) => <li className={classes.messageItem} key={id}>{message}</li>;

export default MessageItem;
