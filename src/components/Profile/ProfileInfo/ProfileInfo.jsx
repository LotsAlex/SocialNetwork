import React from "react";
import classes from './ProfileInfo.module.css';

 const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="main img"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;