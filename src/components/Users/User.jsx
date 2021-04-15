import React from 'react';
import s from "./Users.module.css";
import withoutAva from "../../assets/images/without_avatar.jpg";
import {NavLink} from "react-router-dom";


const User = ({user, ...props}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : withoutAva} alt="ava"
                             className={s.user_photo}/>
                    </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                props.unFollowThunk(user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                props.followThunk(user.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"u.location.country"}
                    </div>
                    <div>
                        {"u.location.city"}
                    </div>
                </span>
            </span>
        </div>
    )
};


export default User;