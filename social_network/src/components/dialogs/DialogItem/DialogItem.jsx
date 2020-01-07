import React from 'react';
import s from './dialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogs_items}>
            <div className={s.dialog}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default DialogItem;
