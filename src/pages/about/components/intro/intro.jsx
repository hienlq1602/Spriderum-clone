import React from 'react';
import './intro.scss';
import logo from '../../../../common/assets/aboutImg/wideLogo.png';
import introImg from '../../../../common/assets/aboutImg/intro.avif';

const Intro = () => {
    return (
        <div id="about" className='about__intro'>
            <div className='about__intro__left'>
                <div>
                    <img src={logo} alt="#" />
                </div>
                <h1>Mạng xã hội <span>chia sẻ quan điểm - kiến thức</span> hàng đầu Việt Nam</h1>
                <div>
                    <p>
                        Được thành lập vào 2016, từ một mạng xã hội chia sẻ quan điểm, kiến thức và thảo luận, Spiderum đã phát triển một hệ sinh thái lớn mạnh, đa nền tảng, với mục tiêu hỗ trợ và kết nối các cá nhân/nhóm tri thức trong xã hội.</p>
                    <p>
                        Với kinh nghiệm 7 năm xây dựng cộng đồng, Spiderum Media tự tin là cầu nối vững chắc cho các tổ chức/doanh nghiệp và thế hệ trẻ.
                    </p>
                    <div>
                        <a href='#contact'>Liên hệ với chúng tôi</a>
                    </div>
                </div>
            </div>
            <div className='about__intro__right'>
                <img src={introImg} alt="intro" />
            </div>

        </div>
    );
};

export default Intro;