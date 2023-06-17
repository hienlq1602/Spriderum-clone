import React from 'react';
import './contact.scss';
import contactImg from '../../../../common/assets/aboutImg/contact.avif';

const ContactForm = () => {
    return (
        <div id='contact'>
            <h1>Liên hệ</h1>
            <form action="#">
                <label htmlFor="name">Tên của bạn:</label>
                <input type="text" id='name'/>
                <label htmlFor="company">Bạn đến từ Công ty/Tổ chức:</label>
                <input type="text" id='company'/>
                <label htmlFor="email">Spiderum có thể gửi thư đến bạn qua email:</label>
                <input type="text" id='email'/>
                <label htmlFor="phonenumber">...và qua SĐT:</label>
                <input type="text" id='phonenumber'/>
                <label htmlFor="opion">Sản phẩm/dịch vụ của Spiderum mà bạn quan tâm:*</label>
                <select id='option'>
                    <option value="placeholder">Vui lòng chọn</option>
                    <option value="post">Bài viết trên Website</option>
                    <option value="tvc&video">TVC, Video trên YouTube</option>
                    <option value="">Thu âm, Podcast</option>
                    <option value="">Quảng bá trên mạng xã hội</option>
                    <option value="">Tài trợ/ phát hành sách</option>
                    <option value="">Khác (hãy để yêu cầu của bạn ở lời nhắn phía dưới)</option>
                </select>
                <label htmlFor="msg">Lời nhắn của bạn đến Spiderum:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <div>
                    <button>Gửi thông tin</button>
                    <div>
                        <img src="https://js.hsforms.net/sproket.png" alt="icon" />
                        <p>Tạo biểu mẫu miễn phí </p>
                        <span> của riêng bạn với HubSpot</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact__form">
                <ContactForm />
            </div>
            <div className="contact__img">
                <img src={contactImg} alt="contact image" />
            </div>
        </div>
    );
};

export default Contact;