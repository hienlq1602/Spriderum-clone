import React from 'react';
import './statistic.scss'

const Statistic = () => {
    return (
        <div className='about__statistic'>
            <div className="statistic__title">
                <h1>Spiderum Network</h1>
            </div>
            <div className="statistic__number">
                <div className="statistic__top">
                    <h1>10<p>tr</p></h1>
                    <h2>người trẻ đã tiếp cận</h2>
                    <h3>là người việt trẻ từ độ tuổi 18 - 35</h3>
                </div>
                <div className="statistic__others">
                    <div className="statistic__others-item statistic__others-top">
                        <div>
                            <h2>Website</h2>
                            <h1>2<p>tr</p></h1>
                            <h2>LƯỢT XEM HÀNG THÁNG</h2>
                        </div>
                        <div>
                            <h2>Youtube</h2>
                            <h1>100<p>tr</p></h1>
                            <h2>LƯỢT HIỂN THỊ</h2>
                        </div>                        
                        <div>
                            <h2>Facebook</h2>
                            <h1>10<p>tr</p> </h1>
                            <h2>LƯỢT HIỂN THỊ</h2>
                        </div>                        
                    </div>
                    <div className="statistic__others-item statistic__others-bottom">
                        <div>
                            <h2>Spotify</h2>
                            <h1>6,5<p>tr</p></h1>
                            <h2>LƯỢT NGHE</h2>
                            <h3>Từng đạt top 01 bảng xếp hạng podcast trên Spotify</h3>
                        </div>
                        <div>
                            <h2>Instagram</h2>
                            <h1>1<p>tr</p></h1>
                            <h2>LƯỢT HIỂN THỊ</h2>
                        </div>                        
                        <div>
                            <h2>TikTok</h2>
                            <h1>15<p>tr</p></h1>
                            <h2>LƯỢT XEM</h2>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;