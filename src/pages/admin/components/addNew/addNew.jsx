import React from "react";
import './addnew.scss';
import Header from '../common/header/header';
import AddForm from "./components/addFrom/addForm";

const AddNew = () => {
  return (
    <div className="admin__addNew">
      <Header />
      <AddForm />
    </div>
    ) 
    
};

export default AddNew;
