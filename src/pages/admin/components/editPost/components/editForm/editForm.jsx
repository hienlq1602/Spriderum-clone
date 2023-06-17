import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

import './editForm.scss';
import postAdminServices from '../../../../../../common/api/postAdminServices';
import fileServices from '../../../../../../common/api/fileServices';

const EditForm = () => {
    const editorRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const editId = location.state.editId;
    const [title, setTitle] = useState('');
    const [bannerImg, setBannerImg] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        postAdminServices.getPost(editId)
        .then((response) => {
            setTitle(response.data.title);
            setContent(response.data.content);
            setBannerImg(response.data.coverImageUrl)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])


    const handleEditPost = () => {
        const content = editorRef.current.getContent();
        const editPost = {
            title: title,
            content: content,
            coverImageUrl: bannerImg
        }

        postAdminServices.editPost(editId, editPost)
        .then((response) => {
            alert('sửa thành công!');
            navigate('/admin')
        })
        .catch((error) => {
            alert('sửa thất bại!')
        })
    };


    return (
        <div>
            <div className="admin__editForm">
                <div>
                    <span>tiêu đề: </span><input type="text" placeholder="Tiêu đề của bài viết" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="imgFile">
                    <span>ảnh bìa: </span>
                    <input type="text" name="" id="" placeholder='link hình ảnh cho bài viết' value={bannerImg} onChange={e => setBannerImg(e.target.value)}/>
                    {/* <input type="file" name="img_file" id="" placeholder='banner'  onChange={e => setImg(e.target.files[0])} /> */}
                </div>
            </div>

            <div>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={content}
                    apiKey='747emkuln2y0ux19ok8m5sov64fianhiao5t03jvgfmkv24u'
                    init={{
                    height: 700,
                    selector: 'textarea',
                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ]
                    }}
                />
                <button onClick={handleEditPost} className="admin__editPost-btn">Cập nhật bài viết</button>
            </div>
        </div>
    );
};

export default EditForm;