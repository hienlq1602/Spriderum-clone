import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { BiUpArrow } from 'react-icons/bi';
import { BiDownArrow } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { BsPersonAdd } from 'react-icons/bs';

import './sidebar.scss';
import { OsHeightCtxt } from '../../detailPost';

const Sidebar = ({authorAvatar}) => {
    const [onShow, setOnShow] = useState(false);
    const osHeightOfContent = useContext(OsHeightCtxt);

    const ctHeight = 150 + osHeightOfContent.osHeight;
    console.log(osHeightOfContent.osHeight);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 150 && window.scrollY < 1000) {
                setOnShow(true);
            } else {
                setOnShow(false);
            }
        }
        window.addEventListener('scroll', handleScroll)

        return  () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return (
        onShow && <div className='detail__sidebar'>
                <div className="detail__sidebar__vote">
                    <span>
                        <BiUpArrow />
                    </span>
                    <p>11</p>
                    <span>
                        <BiDownArrow />
                    </span>

                </div>
                <div className="detail__sidebar__avartar">
                    <img src={authorAvatar} alt="avatar" />
                    <div>
                        <BsPersonAdd />
                    </div>
                </div>
                <div className="detail__sidebar__saved">
                    <button>
                        <AiFillTag />
                    </button>
                </div>
                <div className="detail__sidebar__comment">
                    <button>
                        <BiComment />
                    </button>
                    <p>14</p>
                </div>

                <div className="detail__sidebar__share">
                    <button>
                        <BsShare />
                    </button>
                </div>
            </div>
    );
};

export default Sidebar;