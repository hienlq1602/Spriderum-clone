import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../../../../common/assets/img/logo.png'
import './sideBar.scss';

const SideBar = () => {
  return <div className="sidebar">
      <NavLink to='/admin' className="sidebar__item dashboardTag">
        Dashboard
      </NavLink>
      <div className="sidebar__item listpost">
        <NavLink to='/admin'>Danh sách bài viết</NavLink>
      </div>

      <div className="sidebar__item listpost">
        <NavLink to='statistic'>Thống kê</NavLink>
      </div>
      <div className="sidebar__logo">
        <img src={logo} alt="logo" />
      </div>
  </div>;
};

export default SideBar;
