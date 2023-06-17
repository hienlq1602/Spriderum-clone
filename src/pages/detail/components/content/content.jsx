import React, { useEffect } from 'react';
import { useRef, useContext } from 'react';
import './content.scss';
import { OsHeightCtxt } from '../../detailPost';

const Content = ({title, authorImg, authorName, createdDate, content, banner}) => {
    const date = new Date(createdDate);
    const customDate = `${date.getDate()} tháng ${date.getMonth() + 1}`;
    const osHeightRef = useRef()
    const osHeightCtxt = useContext(OsHeightCtxt);

    useEffect(() => {
        osHeightCtxt.setOsHeight(osHeightRef.current.clientHeight)
    }, [])

    return (
        <div className="detail__content" ref={osHeightRef}> 
            <div className="detail__content__title">
                <h1>{title}</h1>
            </div>
            <div className="detail__content__author">
                <div>
                    <img src={authorImg} alt={authorName}/>
                    <h4>{authorName}</h4>
                </div>
                <div>
                    <span>{customDate}</span>
                </div>
            </div>

            <div className="detail__content__banner">
                <img src={banner} alt="" />
            </div>

            <div className="detail__content__text">
                <p dangerouslySetInnerHTML={{__html: content}}></p>
            </div>
        </div>
    );
};

export default Content;