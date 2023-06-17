import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './people.scss';
import p1 from '../../../../common/assets/aboutImg/people/1.avif';
import p2 from '../../../../common/assets/aboutImg/people/2.avif';
import p3 from '../../../../common/assets/aboutImg/people/3.avif';
import p4 from '../../../../common/assets/aboutImg/people/4.avif';
import p5 from '../../../../common/assets/aboutImg/people/5.avif';
import p6 from '../../../../common/assets/aboutImg/people/6.avif';

const People = () => {

    const people = [p1, p2, p3, p4, p5, p6];

    return (
        <div className='about__people'>
            <div className="people__title">
                <h1>Đồng hành cùng Spiderum</h1>
            </div>

            <Container fluid>
                <Row>
                    {
                        people.map((person, index) => {
                            return <Col key={index} xs={4} sm={4} md={4} lg={2} className='person-col'> 
                                        <div className="person">
                                            <img  src={person} alt="person" />
                                        </div>
                                    </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default People;