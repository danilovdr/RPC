import React from 'react';
import './Info.scss';

import Userpic from './img/userpic.png';

// Имя, прозвище, логин, email, пароль, о себе, выход
class Info extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            nickname: "",
            login: "",
            email: "",
            about: ""
        };

        this.getUser = this.getUser.bind(this);
    }

    render() {
        return (
            <div className="info">
                <img className="info__userpic" src={Userpic} alt="userpic"></img>
                <div className="list info__list">
                    <div className="list__item">
                        <p className="info__name">{this.state.name}</p>
                    </div>
                    <div className="list__item">
                        <p className="info__nickname">{this.state.nickname}</p>
                    </div>
                    <div className="list__item">
                        <p className="info__login">{this.state.login}</p>
                    </div>
                    <div className="list__item">
                        <p className="info__email">{this.state.email}</p>
                    </div>
                    <div className="list__item">
                        <p className="info__password">*************</p>
                    </div>
                    <div className="list__item">
                        <p className="info__about">{this.state.about}</p>
                    </div>
                    <div className="list__item">
                        <button className="info__exit">Выйти</button>
                    </div>
                </div>
            </div>
        );
    }

    getUser(){

    }
}

export default Info;