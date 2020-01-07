import React from 'react';
import s from './dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
let dialog = [
    {
        name: "Alex",
        id: '1'
    },
    {
        name: "Dima",
        id: '2'
    },
    {
        name: "Oleg",
        id: '3'
    },
    {
        name: "Masha",
        id: '4'
    },
    ];

let mess = [
    {
        text: "Hello",
        id: '1'
    },
    {
        text: "Hello2222",
        id: '2'
    },
    {
        text: "Hello333",
        id: '3'
    },
    {
        text: "Hello44444",
        id: '4'
    },
];


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>
                <DialogItem name={dialog[0].name} id={dialog[0].id}/>
                <DialogItem name={dialog[1].name} id={dialog[1].id}/>
                <DialogItem name={dialog[2].name} id={dialog[2].id}/>
                <DialogItem name={dialog[3].name} id={dialog[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={mess[0].text} id={mess[0].id} />
                <Message message={mess[1].text} id={mess[1].id} />
                <Message message={mess[2].text} id={mess[2].id} />
                <Message message={mess[3].text} id={mess[3].id} />
            </div>
        </div>

    );
};

export default Dialogs;
