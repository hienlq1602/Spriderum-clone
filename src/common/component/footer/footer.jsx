import React from 'react';
import './footer.scss';
import logo from '../../assets/img/wideLogo.png';
import appStoreLogo from '../../assets/img/app-store-png-logo.png';
import googlePlayLogo from '../../assets/img/google-play-png-logo.png';
import dmcaProtected from '../../assets/img/dmca_protected_16_120.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__top'>
                <a href='#'>
                    <img src={logo} alt="logo" />
                </a>
                <ul>
                    <li>
                        <a href='#'>Liên hệ</a>
                        <a href='#'>Điều kiện sử dụng</a>
                    </li>
                    <li>
                        Tải app Spiderum
                        <a href='#'>
                            <img src={appStoreLogo} alt='img'/>
                        </a>
                        <a href='#'>
                            <img src={googlePlayLogo} alt='img'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer__bottom'>
                <div>
                    <h4>Công ty Cổ Phần Felizz</h4>
                    <p>Trực thuộc Công ty Cổ Phần Spiderum Việt Nam (Spiderum Vietnam JSC)</p>
                    <p>Người chịu trách nhiệm nội dung: Trần Việt Anh</p>
                    <p>Giấy phép MXH số 341/GP-TTTT do Bộ TTTT cấp ngày 27 tháng 6 năm 2016</p>
                </div>
                <div>
                    <h4>Liên hệ hợp tác</h4>
                    <p>Email: contact@spiderum.com</p>
                    <p>Điện thoại: (+84) 977 062 149</p>
                </div>
                <div>
                    <h4>© Copyright 2017 - 2023</h4>
                    <p>Email: contact@spiderum.com</p>
                    <p>Điện thoại: (+84) 946 042 093</p>
                    <p>Tầng 11, tòa nhà HL Tower, lô A2B, phố Duy Tân, phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
                </div>
            </div>
            <div className="footer__protected">
                <img src={dmcaProtected} alt='protected'/>
            </div>
        </div>
    );
};

export default Footer;