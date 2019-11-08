import classes from "./SidebarFreinds.module.css";
import React from "react";

const SidebarFriends = (props) => {
    let friends = props.friends.map(friend => (
        <div>
            <img
                src="http://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig"
                alt="avatar"/>
            <div>{friend.name}</div>
        </div>
    ))
    return (
        <div>
            <h3>Friends</h3>
            <div className={classes.friend}>
                {friends}
            </div>
        </div>
    )
}

export default SidebarFriends;