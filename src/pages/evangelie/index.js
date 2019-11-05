import React from 'react';
import './index.scss';

import Search from './components/search/Search';
import Text from './components/text/Text';

function Evangelie() {
    return (
        <div className="doctrine">
            <Search />
            <Text />
        </div>
    );
} 

export default Evangelie;