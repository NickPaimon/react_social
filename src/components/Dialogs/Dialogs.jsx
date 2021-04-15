import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogElements = state.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id}/>
    );
    let messageElements = state.messages.map(m =>
        <MessageItem key={m.id} text={m.message}/>
    );
    let newMessageText = state.newMessageText;


    let sendMessage = () => {
        props.sendMessage();
    };
    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.addNewMessageText(newText);
    };

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogElements}
            </div>
            <div>
                {messageElements}
                <div className={s.textBlock}>
                    <textarea value={newMessageText}
                              onChange={onMessageChange}
                              placeholder='send message'
                              className={s.text}> </textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;