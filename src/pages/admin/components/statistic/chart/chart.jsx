import React from 'react';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import statisticServices from '../../../../../common/api/statisticServices'

const Chart = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        statisticServices.getStatistic()
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            console.error(err.message);
            alert('da co loi xay ra!');
        })
    }, [])

    const statisticData = {
        labels: data.labels,
        datasets: [{
            label: 'View per week',
            data: data.data
        }]
    }

    return <Bar data={statisticData} />;
};

export default Chart;