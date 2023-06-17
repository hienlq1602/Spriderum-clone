import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../common/assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import './loginUser.scss';
import authServices from '../../common/api/authServices';

const LoginUser = () => {
    const navigate = useNavigate();

    const userName = useRef();
    const password = useRef();
    const avatarUrl = useRef();
    const FullName = useRef();

    const handleUserRegister = () => {
        const usn = userName.current.value;
        const psw = password.current.value;
        const ava = avatarUrl.current.value;
        const fname =  FullName.current.value;
        console.log(usn, psw);
        authServices.register(usn, psw,ava, fname)
        .then((response) => {
            console.log(response)
            localStorage.setItem('userName', response.data.username)
            navigate('/admin', {state: {
                userName: response.data.username
            }});
        })
        .catch((error) => {
            alert('Đăng ký thất bại');
            console.log(error.message);
        })
    }

    return (
        <div className="loginUser">
            <div>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <input type="text" placeholder='Tên đăng nhập' ref={userName}/>
                    <input type="password" placeholder='Mật khẩu' ref={password}/>
                    <input type="text" placeholder='Tên đầy đủ' ref={FullName}/>
                    <input type="text" placeholder='Link Hình ảnh' ref={avatarUrl}/>
                    <button onClick={handleUserRegister}>Đăng Ký</button>
                </div>
                {/* <div className="loginUser__bottom">
                    <NavLink>Quên mật khẩu?</NavLink>
                    <div>
                        <span>không có tài khoản?</span>
                        <NavLink>Đăng ký ngay</NavLink>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default LoginUser;