import React from 'react';
import './topicsForm.scss';

const topicsForm = () => {
    return (
        <div className='topics__form'>
            <div>
                <img src="https://21652248.fs1.hubspotusercontent-na1.net/hubfs/21652248/image.png" alt="" />
            </div>
            <h1>NHỮNG BÀI VIẾT <span>NỔI BẬT</span> BẠN KHÔNG NÊN BỎ LỠ!</h1>
            <h2>Thứ Năm hàng tuần, Spiderum sẽ gửi bạn email tổng hợp những bài viết đáng đọc nhất tuần qua.</h2>
            <form action="#">
                <label htmlFor="email">Email của bạn là:</label>
                <input type="text" id='email' placeholder="hai.nguyen@gmai.com"/>
                <label htmlFor="name">Chúng mình có thể gọi bạn là:</label>
                <input type="text" id='name' placeholder="Nguyễn Văn Hải"/>
                <button>Đăng ký !</button>
            </form>
            <div>
                <img src="https://js.hsforms.net/sproket.png" alt="" />
                <p>
                    Tạo biểu mẫu miễn phí 
                    <a href="#"> của riêng bạn với HubSpot</a>
                </p>
            </div>
        </div>
    );
};

export default topicsForm;