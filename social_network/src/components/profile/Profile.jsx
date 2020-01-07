import React from 'react';
import s from './profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
};

export default Profile;
