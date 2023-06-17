import React from 'react';

import './banner.scss';
import BannerImg from '../../../../common/assets/img/Banner.png';
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }
    return (
        <div className='banner'>
            <img src={BannerImg} alt='banner' />
            <div className='banner__text'>
                <h1>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</h1>
                <h2>Viết - chia sẻ - kết nối - Chiêm nghiệm</h2>
                <h2>Tất cả tại Spiderum</h2>
                <button onClick={handleClick}>Đăng bài viết</button>
            </div>
        </div>
    );
};

export default Banner;