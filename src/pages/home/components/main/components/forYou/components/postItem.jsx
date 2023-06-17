import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostItem = ({id, title, content, imgUrl, createdDate}) => {

    const navigate = useNavigate();

    const handleNavigateToDetails = () => {
        navigate(`/detail/${id}`);
    }

    return (
            <div className='for-you__item'>
                <button className='for-you__img' onClick={handleNavigateToDetails}>
                    <img src={imgUrl} alt="topic image" />
                </button>
                <div className='for-you__text'>
                    <button className='for-you__item__title' onClick={handleNavigateToDetails}>  
                        <p>{title}</p>
                    </button>
                    <p>{content}</p>
                    <div className='for-you__item__bottom'>
                        <div>
                            {/* <a to='#'>
                                <img src="https://i.pinimg.com/564x/a6/36/a6/a636a6b8db7c02d5a2615fde3d787c28.jpg" alt="" />
                                <h4>Nguyễn Văn Hải</h4>
                            </a> */}
                            <span>{createdDate}</span>
                        </div>
                        <p>
                            10 phút đọc
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default PostItem;