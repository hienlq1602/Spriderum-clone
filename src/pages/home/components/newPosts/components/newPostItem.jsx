import React from 'react';
import './newPostItem.scss';

const NewPostItem = ({title, content, banner, }) => {
    return (
            <div className='new-posts__item'>
                <div className='new-posts__img'>
                    <img src='https://images.spiderum.com/sp-thumbnails/9b78ef90da0111eda934a3457f99d586.png' alt='post-img' />
                </div>
                <div className='new-posts__infor'>
                    <h4>"Tốt nghiệp trễ hạn" - Lựa chọn của riêng mình</h4>
                    <p>Ngay từ những ngày đầu bước chân vào Bách Khoa, mình đã</p>
                    <div>
                        <div className='new-posts__bottom'>
                            <div className="new-posts__author">
                                <img src="https://images.spiderum.com/sp-xs-avatar/88731f00852a11ed9054d5800d16e88f.jpeg" />
                                <h4>anhkolamgidauanhthe</h4>
                            </div>
                            <p>7 phút đọc</p>
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default NewPostItem;