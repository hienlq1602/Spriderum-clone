import React from 'react';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './comments.scss';
import commentServices from '../../../../common/api/commentServices';
import { useCustomDate } from '../../../../common/hooks/useCustomDate/useCustomDate';
import { useNavigate } from 'react-router-dom';

const CommentItem = ({authorImg, authorName, timeComment, content}) => {
    const date = new Date(timeComment)
    const customDate = useCustomDate(date);


    return (
        <>
            <div className="commentItem">
                <div className="commentItem__author">
                    <img src={authorImg} alt="avatar" />
                    <div>
                        <h4>{authorName}</h4>
                        <p>{customDate}</p>
                    </div>
                </div>
                <div className="commentItem__content">
                    <p>
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}

const NoCommentItem = () => {
    return (
        <div className="detail__comments__no-comment">
            <div className="no-comment__icon-rectangle"></div>
            <div className="no-comment__icon-triangle"></div>
            <h4>Hãy là người đầu tiên bình luận bài viết này</h4>
        </div>
    )
}

const OldCommentsOfDetail = ({authorImg, authorName, timeComment, content}) => {
    return (
        <div className="detail__comments__old">
            <CommentItem 
                authorImg = {authorImg}
                authorName = {authorName}
                timeComment = {timeComment} 
                content = {content}
            />
        </div>
    )
}

const Comments = ({id}) => {
    const [comments, setComments] = useState([]);
    const [reload, setReload] = useState(false);
    const ref = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        getComments();
    }, [])

    const getComments = () => {
        axios.get(`http://contabo.foxcode.site:8085/api/v1/comments/${id}?page=0&size=10`)
        .then((response) =>
            setComments(response.data.content)
        )
        .catch((error) => {
            console.log(error)
        })
    }

    const handleAddNewComment = () => {
        if(localStorage.getItem('token')){
            const API_PATH = "/api/v1/comments";
        const getHeaderConfig = () => {
            return {
                headers: {
                    token: localStorage.getItem("token"),
                    },
            };
        };

        const newComment = {
            content: ref.current.innerText
        };

        axios.post('http://contabo.foxcode.site:8085' + API_PATH + `/${id}`, newComment, getHeaderConfig())
        .then((reponse) => {
            getComments();
            ref.current.innerText = '';
        })
        .catch((error) => {
            console.log(error)
        })
        }
        else {
            navigate('/loginHome')
        }
        
    }

    return (
        <div className='detail__comments'>
            <div className="detail__comments__new">
                <div contentEditable='true' ref={ref} data-placeholder="Hãy chia sẻ cảm nghĩ của bạn về bài viết"></div>
                <button onClick={handleAddNewComment}>Gửi</button>
            </div>
            {
                (comments.length === 0) ? <NoCommentItem /> : 
                
                    comments.map((comment) => {
                        return <OldCommentsOfDetail 
                            key={comment.id}
                            authorImg = {comment.commentBy.avatarUrl}
                            authorName = {comment.commentBy.fullName}
                            timeComment = {comment.commentAt} 
                            content = {comment.content}
                        />
                    })
            }
        </div>
    );
};

export default Comments;