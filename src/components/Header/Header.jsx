import React from 'react';
import s from './Header.module.css';
import logo from './icon.svg';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <img src={logo}
                     alt="logo"/>
                <h2 className={s.social}>Social network</h2>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'} className={s.loginLink}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;