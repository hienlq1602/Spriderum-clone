import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './forYou.scss';
import postServices from '../../../../../../common/api/postServices';
import Paging from '../../../../../../common/component/pagination/pagination';
import PostItem from './components/postItem';
import {postsFetchAction} from '../../../../redux/homeAction';

const ForYou = () => {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    // console.log(posts)

    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        dispatch(getPostFromAPI);
    }, [page]);

    const handlePageClicked = (page) => {
        setPage(page - 1);
    }

    const getPostFromAPI = (dispatch) => {
        postServices.getPosts(page, 10)
        .then(response => {
            setTotalPage(response.data.totalPages)
            dispatch(postsFetchAction(response.data.content))
        })
        .catch(err => {
            console.log(err.message);
            alert('Rat tiec, da co loi xay ra')
        })
    }

    return (
        <div className='for-you'>
            <div className='for-you__title'>
                <h1>Dành cho bạn</h1>
            </div>
            <div className='for-you__content'>
                {

                    posts.map((item) => {
                        const date = new Date(item.createdDate);
                        const customDate = `${date.getDate()} Th${date.getMonth() + 1}`
                        return <PostItem key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            createdDate={customDate}
                            imgUrl={item.coverImageUrl}
                        />
                    })
                }
            </div>

            <Paging 
                page={page + 1}
                totalPage = {totalPage}
                onPageClick = {handlePageClicked}
            />
        </div>
    );
};

export default ForYou;