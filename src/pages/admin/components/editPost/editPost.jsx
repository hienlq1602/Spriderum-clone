import React from "react";
import './editPost.scss';
import Header from '../common/header/header';
import EditForm from "./components/editForm/editForm";

const EditPost = () => {
  return (
    <div className="admin__editPost">
      <Header />
      <EditForm />
    </div>
    ) 
    
};

export default EditPost;
