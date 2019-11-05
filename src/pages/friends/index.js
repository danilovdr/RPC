import React from 'react';
import './index.scss';

import Nav from './nav/Nav';
import Profile from './profile/Profile';

function Friends() {
    return (
        <div className="friends">
            <Nav/>
            <Profile/>
        </div>
    );
}

export default Friends;