import React from 'react';
import './index.scss';

import Form from './components/form/Form';


function Login(props) {
    return (
        <div className="login">
            <Form history={props.history}/>
        </div>
    );
}

export default Login;