import React from 'react';
import './topicList.scss';

const TopicList = () => {
    const topicList = ['Quan điểm - Tranh luận', 'Khoa học - Công nghệ', 'Âm nhạc', 'Nấu ăn - ẩm thực', 
    'WTF', 'Du lịch', 'Tâm lý học', 'Người trong muôn nghề', 'Fashion', 'Ô tô', 
    'Yêu', 'Sách', 'Fitness', 'Lịch sử', 'Lifestyle', 'The Brands', 'Thể thao', 'Điêu khắc Kiến trúc Mỹ thuật', 
    'Góc nhìn thời sự', 'Phát triển bản thân', 'Giáo dục', 'Chuyện thầm kín', 'Movie', 'Thinking out loud', 
    'Game', 'Sự kiện Spiderum', 'Xe máy', 'Sác tác', 'Nhiếp ảnh'];

    return (
        <div className='topics__item'>
            {
                topicList.map((topic, index) => {
                    return <a href="#" key={index}>{topic}</a>;
                })
            }
        </div>
    );
};

export default TopicList;