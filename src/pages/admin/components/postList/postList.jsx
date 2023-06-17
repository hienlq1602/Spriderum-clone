import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './postlist.scss';
import Header from '../common/header/header';
import Paging from '../../../../common/component/pagination/pagination';
import PostListItem from "./components/postListItem";
import postAdminServices from "../../../../common/api/postAdminServices";


const PostListAction = ({onFilterPost}) => {
  const startDateRef = useRef();
  const endDateRef = useRef();
  const titleRef = useRef();

  const handleFilterPosts = () => {
    const startDate = new Date(startDateRef.current.value);
    const endDate = new Date(endDateRef.current.value);

    const info = {
      title: titleRef.current.value,
      createdDateFrom: startDate,
      createdDateTo: endDate
    }

    onFilterPost(info)
  }

  return (
      <div className="postlist__search-addnew">
        <div className="postlist__input">
          <div>
            <label htmlFor="name">Tiêu đề bài viết</label>
            <input type="text" placeholder="Tiêu đề bài viết" ref={titleRef}/>
          </div>
          <div>
            <label htmlFor="startDate">Ngày bắt đầu</label>
            <input type="date" ref={startDateRef}/>
          </div>
          <div>
            <label htmlFor="endDate">Ngày kết thúc</label>
            <input type="date" ref={endDateRef}/>
          </div>
        </div>

        <div className="postlist__search-addnew__button">
          <div className="postlist__search__button">
            <button onClick={handleFilterPosts}>Tìm kiếm</button>
          </div>

          <div className="postlist__addnew__button">
            <NavLink to="addnew">Thêm mới</NavLink>
          </div>
        </div>
      </div>
  )
}

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getAdminPosts();
  }, [page]);

  //handle action when click on page of pagination
  const handlePageClicked = (page) => {
    setPage(page - 1);
  }

  //show list of posts when loading admin page
  const getAdminPosts = () => {
    const bodyFilter = {
      title: "",
      createdDateFrom: "",
      createdDateTo: ""
    }

    postAdminServices.filterPosts(page, 10, bodyFilter)
    .then(response => {
      setPosts(response.data.content)
      setTotalPage(response.data.totalPages)
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  //handle delete post
  const handleDeletePost = (id) => {
    postAdminServices.deletePost(id)
    .then(response => {
      alert('Xóa bài viết thành công!');
      getAdminPosts();
    })
    .catch(error => {
      alert('Đã có lỗi xảy ra!');
      console.log(error);
    })
  }

  //handle edit post
  const handleEditPost = (editId) => {
      navigate('editpost', {
            state: {
                editId: editId
            }
      })
  }

  //handle when click on search(filter) button
  const handleFilterPosts = (info) => {
    postAdminServices.filterPosts(page, 10, info)
    .then((response) => {
      setPosts(response.data.content)
    })
    .catch((error) => {
      alert('Filter error: ' + error.message);
    })
  }

  
  return (
    <div className="postlist">
      <Header />
      <PostListAction onFilterPost={handleFilterPosts} />

      <div className="postlist__content">
        <h1>Danh sách bài viết</h1>
        <table>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Tên bài viết</th>
              <th>Tác giả</th>
              <th>Ngày đăng</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
              {
                posts.map((post, index) => {
                    const date = new Date(post.createdDate)
                    const customDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

                    return  <PostListItem 
                              key={post.id}
                              id={post.id}
                              index={index}
                              title={post.title}
                              authorName={post.author.fullName}
                              customDate={customDate}
                              onDeletePost={handleDeletePost}
                              onEditPost={handleEditPost}/>
                })
              }
          </tbody>
        </table>
      </div>

      <Paging 
        page={page + 1}
        totalPage = {totalPage}
        onPageClick = {handlePageClicked}
      />
    </div>
  );
};

export default PostList;
