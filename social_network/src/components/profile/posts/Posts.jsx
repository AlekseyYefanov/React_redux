import React from 'react';
import s from './posts.module.css';
import Post from "./post/Post";

const Posts = () => {
    return (
        <div>
            <h3 className={s.postTitle}>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <Post message='Text1'/>
            <Post message='Text2'/>
            <Post message='Text3'/>
            <Post message='Text4'/>
        </div>
    );
};

export default Posts;
