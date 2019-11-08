import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="http://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig"
                 alt="avatar"/>
            {props.post}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;