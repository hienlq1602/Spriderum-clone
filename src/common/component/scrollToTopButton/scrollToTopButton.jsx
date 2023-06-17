import React from 'react';
import { BiUpArrow } from 'react-icons/bi';
import { useEffect, useState, useRef } from 'react';

import './scrollToTopButton.scss';

const ScrollToTopButton = () => {

    const [onShow, setOnShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            (window.scrollY > 200) ? setOnShow(true) : setOnShow(false)
        }

        window.addEventListener('scroll', handleScroll)

        return  () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
            <>
                {onShow && (
                    <div className="scrollToTopButton" onClick={topFunction}>
                        <BiUpArrow />
                    </div>
                )}
            </>
    );
};

export default ScrollToTopButton;