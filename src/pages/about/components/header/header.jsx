import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import './header.scss';
import Logo from '../../../../common/assets/aboutImg/wideLogo.png';

const Header = () => {
    return (
        <div className='about__header'>
            <div>
                <NavLink to='/'>
                    <img src={Logo} alt="logo" />
                </NavLink>
                <button>Switch to English</button>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <a href="#about">Về Spiderum</a>
                    </li>
                    <li>
                        <a href="#books">Sản phẩm</a>
                    </li>
                    <li>
                        <a href="#partners">Đối tác</a>
                    </li>
                    <li>
                        <a href="#contact">Liên hệ</a>
                    </li>
                    <li>
                        <a href="https://aboutus.spiderum.com/pdf/Spiderum_Ratecard_2023_VN.pdf" target='_blank'>Tải Media kit</a>
                    </li>
                    <li>
                        <button><BsTelephoneFill /></button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;