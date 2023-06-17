import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './topVideos.scss';

const TopVideos = () => {

    const videosArr = [{
        name: `Tại sao Nga gọi Trung Quốc là ''Khiết Đan'' | Nhện lịch sử | Nghiên cứu lịch sử | SPIDERUM`,
        image: 'https://images.spiderum.com/sp-thumbnails/d878fd30802011eda629a32d86d10580.jpg',
        author: {
            authorName: 'Spiderum',
            authorImg: 'https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj'
        }
    }, 
    {
        name: `CHIẾN TRANH BIÊN GIỚI VIỆT - TRUNG 1979: Những Điều Ít Ai Biết | Nhện lịch sử | PLEASE | SPIDERUM`,
        image: 'https://images.spiderum.com/sp-thumbnails/f4699a50d20e11ed9f07f92e1ad58657.jpg',
        author: {
            authorName: 'Spiderum',
            authorImg: 'https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj'
        }
    },
    {
        name: `Charles Ponzi: KẺ THẤT HỌC đã LỪA THÀNH CÔNG CẢ THẾ GIỚI | Minh HD | SPIDERUM`,
        image: 'https://images.spiderum.com/sp-thumbnails/9cb1fb70dcd811ed91a875c050ea7059.jpg',
        author: {
            authorName: 'Spiderum',
            authorImg: 'https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj'
        }
    },
    {
        name: `Vì sao TRUNG HOA thường THẤT BẠI khi XÂM CHIẾM VIỆT NAM? | Khánh Toàn | SPIDERUM`,
        image: 'https://images.spiderum.com/sp-thumbnails/d78397a0db9c11ed8e4b151c4a4fc324.jpg',
        author: {
            authorName: 'Spiderum',
            authorImg: 'https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj'
        }
    },
    ]

    return (
        <Container className='video'>
            <Row>
                <h1 className='video__topic'>Video Spiderum</h1>
            </Row>
            <Row>
                {
                    videosArr.map((videoItem, index) => {
                        return  <Col sm={12} md={4} lg={3} key={index}>
                                    <div className='video__item'>
                                        <a href='#' className='video__thumbnail'>
                                            <img src={videoItem.image} alt='video__thumbnail'/>
                                            <img src="https://spiderum.com/assets/images/play-icon.svg" alt="video__button" />
                                        </a>
                                        <h1 className='video__title'>
                                            {videoItem.name}
                                        </h1>
                                        <div className="video__author">
                                            <img src={videoItem.author.authorImg} alt="author" />
                                            <h4>{videoItem.author.authorName}</h4>
                                        </div>
                                    </div>
                                </Col>
                            })
                }
            </Row>
        </Container>
    );
};

export default TopVideos;