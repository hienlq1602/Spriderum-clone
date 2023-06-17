import React from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import logo from '../../../../../common/assets/img/wideLogo.png';
import adminLogo from '../../../../../common/assets/img/logo.png';

import './header.scss';

const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        navigate('/');
    }
    const handBack = () => {
        navigate('/')
    }

    return (
        <div className="poslist__header">
            <div className="postlist__logo">
            <img src={logo}  alt="logo" onClick={handBack} />
            </div>
            {/* <NavLink to='/'>Trang chủ</NavLink> */}
            <div className="postlist__favorite">
            {/* <NavLink>Yêu thích</NavLink> */}
            </div>
            <div className="poslist__admin">
            <p>Xin chào, {localStorage.getItem('userName')}</p>
            <img src={adminLogo} alt="logo" />
            <button onClick={handleLogout}>Đăng xuất</button>
            </div>
        </div>
    );
};

export default Header;