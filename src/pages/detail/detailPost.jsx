import React from "react";
import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import './detailPost.scss';
import Header from "../../common/component/header/header";
import Footer from "../../common/component/footer/footer";
import Content from "./components/content/content";
import Sidebar from "./components/sidebar/sidebar";
import Comments from "./components/comments/comments";
import postServices from '../../common/api/postServices';
import ScrollToTopButton from '../../common/component/scrollToTopButton/scrollToTopButton';
import { detailPostFetch } from './redux/detailAction';

export const OsHeightCtxt = createContext();

const DetailPost = () => {
    const dispatch = useDispatch();
    const [osHeight, setOsHeight] = useState();
    const value = {
        osHeight,
        setOsHeight
    }

    const params = useParams();

    const detailPost = useSelector(state => state.detailPost.detailPost);
    const [author, setAuthor] = useState({});

    useEffect(() => {
        dispatch(loadDetailPost);
        const onTopOfPage = setTimeout(() => { window.scrollTo(0, 0); }, 10)

        return () => {
            clearTimeout(onTopOfPage);
        }
    }, [])

    const loadDetailPost = (dispatch) => {
        postServices.getDetailPost(params.id)
            .then((response) => {
                setAuthor(response.data.author)
                dispatch(detailPostFetch(response.data))
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <OsHeightCtxt.Provider value={value}>
            <div className="detail">
                <Header />
                <div className="detail__main">
                    <Content
                        title={detailPost.title}
                        authorImg={author.avatarUrl}
                        authorName={author.fullName}
                        createdDate={detailPost.createdDate}
                        content={detailPost.content}
                        banner={detailPost.coverImageUrl}
                    />
                    <Sidebar
                        authorAvatar={author.avatarUrl}
                    />
                    <Comments
                        id={params.id}
                    />
                </div>
                <Footer />
                <ScrollToTopButton />
            </div>
        </OsHeightCtxt.Provider>
    );
};

export default DetailPost;
