import React from 'react';

const PostListItem = ({id, index, title, authorName, customDate, onDeletePost, onEditPost}) => {

    const handleDeletePost = () => {
        onDeletePost(id)
    }

    const handleEditPost =  () => {
        onEditPost(id)
    }

    return (
            <tr className='PostListItem'>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{authorName}</td>
                <td>{customDate}</td>
                <td>
                    <button onClick={handleEditPost}>Sửa</button>
                </td>
                <td>
                    <button onClick={handleDeletePost}>Xóa</button>
                </td>
            </tr>
    );
};

export default PostListItem;