import classes from "./DialogItems.module.css";
import React from "react";
import Dialog from "./Dialog/Dialog";

const DialogItems = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    return (
        <div className={classes.dialogItems}>
            {dialogsElements}
        </div>
    )
}

export default DialogItems;