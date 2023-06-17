import React from 'react';
import './footer.scss';
import logo from '../../../../common/assets/img/wideLogo.png';
import appStoreLogo from '../../../../common/assets/img/app-store-png-logo.png';
import googlePlayLogo from '../../../../common/assets/img/google-play-png-logo.png';
import dmcaProtected from '../../../../common/assets/img/dmca_protected_16_120.png'

const Footer = () => {
    return (
<div className='footer__about'>
            <div className='footer__about__top'>
                <a href='#'>
                    <img src={logo} alt="logo" />
                </a>
                <div>
                    <span>Tải app Spiderum:</span> 
                    <a href='#'>
                        <img src={appStoreLogo} alt='img'/>
                    </a>
                    <a href='#'>
                        <img src={googlePlayLogo} alt='img'/>
                    </a>
                </div>
            </div>
            <div className='footer__about__bottom'>
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
            <div className="footer__about__protected">
                <img src={dmcaProtected} alt='protected'/>
            </div>
        </div>
    );
};

export default Footer;