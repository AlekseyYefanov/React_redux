import React from 'react';
import s from './post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>{props.message}</div>
        </div>
    );
};

export default Post;
