import React from 'react';
import s from "./Users.module.css";
import withoutAva from "../../assets/images/without_avatar.jpg";
import {NavLink} from "react-router-dom";


const User = ({user, ...props}) => {
    return (
        <div className={s.user}>

            <div className={s.photoButtonBlock}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : withoutAva} alt="ava"
                         className={s.user_photo}/>
                </NavLink>
                {user.followed
                    ? <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                        props.unFollowThunk(user.id)
                    }}>Unfollow</button>
                    : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                        props.followThunk(user.id)
                    }}>Follow</button>
                }
            </div>

            <div>
                <p><span className={s.userTitle}>User Name: </span>{user.name}</p>
                <p><span className={s.userTitle}>User Status: </span>{user.status}</p>
            </div>
        </div>
    )
};


export default User;