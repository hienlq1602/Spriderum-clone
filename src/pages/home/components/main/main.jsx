import React from 'react';
import ForYou from './components/forYou/forYou';
import Topics from './components/topics/topics';

import './main.scss';

const Main = () => {
    return (
        <div className="main">
            <div className="main__item-left">
                <ForYou />
            </div>
            <div className="main__item-right">
                <Topics />
            </div>
        </div>
    );
};

export default Main;