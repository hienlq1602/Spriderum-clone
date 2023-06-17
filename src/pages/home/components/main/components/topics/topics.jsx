import React from 'react';
import './topics.scss';
import TopicList from './topicList/topicList';
import TopicsForm from './topicsForm/topicsForm';

const Topics = () => {
    return (
        <div className='topics'>
            <h1 className='topics__title'>Chủ đề</h1>
            <TopicList />
            <TopicsForm />
        </div>
    );
};

export default Topics;