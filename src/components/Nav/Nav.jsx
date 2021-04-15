import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import picture from '../../assets/images/picture.svg';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Friends</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>

            <div className={s.br}></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.br}></div>
            <div className={s.friends_block}>
                <div><p>Quick message</p></div>
                <div className={s.friends_pic}>
                <div><img src="https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg" alt="pic_1"/>
                </div>
                <div><img src="https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg" alt="pic_2"/>
                </div>
                <div><img src="https://image.freepik.com/free-vector/chinese-girl-avatar_8500-16.jpg" alt="pic_3"/>
                </div>
                </div>
            </div>
            <div>
                <img className={s.bg_pic} src={picture} alt="nice background picture"/>
            </div>
        </nav>
    );
}

export default Nav;