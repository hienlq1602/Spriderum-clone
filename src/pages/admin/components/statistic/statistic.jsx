import React from "react";
import './statistic.scss';
import Header from '../common/header/header'
import Chart from './chart/chart';

const Statistic = () => {
  return (
    <div className="statistic">
      <Header />
      <div className="statistic__content">
          <h1>Thống kê số lượt xem theo tuần</h1>
          <Chart />
      </div>
    </div>
  )
};

export default Statistic;
