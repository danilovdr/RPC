import React from 'react';
import './index.scss';

import Search from './search/Search';
import Text from './text/Text';

function Evangelie() {
    return (
        <div className="doctrine">
            <Search />
            <Text />
        </div>
    );
} 

export default Evangelie;