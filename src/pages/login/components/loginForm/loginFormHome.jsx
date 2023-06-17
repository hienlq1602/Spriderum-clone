import React from 'react';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './loginForm.scss';
import logo from '../../../../common/assets/img/logo.png'
import authServices from '../../../../common/api/authServices';

const LoginFormHome = () => {

  const userName = useRef('');
  const password = useRef('');
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      return navigate('/admin');
    }
  }, [])

  const handleLoginHome = () => {
    const usn = userName.current.value;
    const psw = password.current.value;
    
    authServices.login(usn, psw)
    .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.username);
        
        return navigate('/')
    })
    .catch((error) => {
      alert('tên đăng nhập hoặc mật khẩu không đúng!')
      console.log(error.message);
    })
  }

  return (
    <div className="login__form">
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="login__form-form">
          <input type="text" placeholder='Tên đăng nhập' ref={userName}/>
          <input type="password" placeholder='Mật khẩu' ref={password}/>
          <button onClick={handleLoginHome}>Đăng nhập</button>
        </div>
        <div>
                        <span>không có tài khoản?</span>
                        <NavLink to={'/register'}>Đăng ký ngay</NavLink>
                    </div>
        
      </div>
    </div>
  );
};

export default LoginFormHome;