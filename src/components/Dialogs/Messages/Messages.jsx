import classes from "./Messages.module.css";
import React from "react";
import Message from "./Message/Message";

const Messages = (props) => {
    let messages = props.messagesData.map(message => <Message message={message.message} />);
    return (
        <div className={classes.messages}>
            {messages}
        </div>
    )
}

export default Messages;