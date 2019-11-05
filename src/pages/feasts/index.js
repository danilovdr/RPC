import React from 'react';
import './beer.scss';
import Filter from './components/filter/filter'
import Add from './components/add/add';
import Items from './party/index';


function Beer(){
    return (
        <div className="beer">
            <Filter/>
            <div className="main">
                <Add/>
                <Items/>
            </div>
        </div>
    );
};

export default Beer;