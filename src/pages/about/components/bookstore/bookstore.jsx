import React from 'react';
import './bookstore.scss';
import bookstoreImg from '../../../../common/assets/aboutImg/bookStore.avif';

const Bookstore = () => {
    return (
        <div id='books' className='bookstore'>
            <div className="bookstore__left">
                <div>
                    <h1>Nhà sách Spiderum</h1>
                    <h3>Đồng hành cùng sự phát triển của người trẻ.</h3>
                </div>
                <div>
                    <h1>70K+</h1>
                    <h2>CUỐN ĐÃ PHÁT HÀNH</h2>
                    <h3>Trong series sách Người Trong Muôn Nghề, một series sách hướng nghiệp hàng đầu Việt Nam</h3>
                </div>                
                <div>
                    <h1>40K+</h1>
                    <h2>CUỐN ĐÃ BÁN</h2>
                    <h3>Trong series sách khác bao quát nhiều đề tài</h3>
                </div>
            </div>
            <div className="bookstore__right">
                <img src={bookstoreImg} alt="books" />
            </div>
        </div>
    );
};

export default Bookstore;