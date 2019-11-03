import React from 'react';
import './header.scss';
import Logo from './img/logo.png';
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <img className="img" src={Logo} alt="logo"></img>
            <div className="nav">
                <NavLink exact to="/" className="item">Главная</NavLink>
                <NavLink to="/beer" className="item">Пиры</NavLink>
                <NavLink to="/friends" className="item">Друзья</NavLink>
                <NavLink to="/evangelie" className="item">Писание</NavLink>
                <NavLink to="/login" className="item">Логин</NavLink>
            </div>
        </div>
    );
}

export default Header;