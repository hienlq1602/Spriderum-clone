import React from 'react';
import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './addForm.scss';
import postAdminServices from '../../../../../../common/api/postAdminServices';
import fileServices from '../../../../../../common/api/fileServices';

const AddForm = () => {
    const navigate = useNavigate();
    const editorRef = useRef(null);
    const title = useRef(null);
    const bannerImg = useRef(null);
    const [img, setImg] = useState();

    const handleAddNewPost = () => {
        let data = new FormData();
        data.append('image', img);


        const post = {
            title: title.current.value,
            content: editorRef.current.getContent(),
            coverImageUrl: bannerImg.current.value
        }

        postAdminServices.addPost(post)
        .then(response => {
            alert('thêm thành công!')
            navigate('/admin');
            console.log(response)
        })
        .catch(err => {
            alert('thêm thất bại')
            console.log(err)
        })
    };


    return (
        <div>
            <div className="admin__addnew__uploadForm">
                <div>
                    <span>tiêu đề: </span><input type="text" placeholder="Tiêu đề của bài viết" ref={title} />
                </div>
                <div className="imgFile">
                    <span>ảnh bìa: </span>
                    <input type="text" name="" id="" placeholder='link hình ảnh cho bài viết' ref={bannerImg} />
                    {/* <input type="file" name="img_file" id="" placeholder='banner'  onChange={e => setImg(e.target.files[0])} /> */}
                </div>
            </div>

            <div>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue=""
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
                <button onClick={handleAddNewPost} className="admin__addnew-btn">Thêm mới</button>
            </div>
        </div>
    );
};

export default AddForm;