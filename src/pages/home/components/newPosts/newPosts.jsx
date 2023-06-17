import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

import NewPostItem from './components/newPostItem';
import './newPosts.scss';

const NewPosts = () => {
    const arr = [1, 2, 3, 4];

    return (
        <Container className="new-posts">
            <Row>
                <h1 className='new-posts__topic'>Top bài viết mới nhất trên Spiderum</h1>
            </Row>
            <Row>
                {
                    arr.map((item, index) => {
                        return <Col sm={12} md={6} lg={6} key={index}>
                            <NewPostItem 
                            
                            />
                        </Col>
                    })
                }
            </Row>
        </Container>
    );
};

export default NewPosts;