import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['','Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'All Cases',             
              backgroundColor: ['rgba(25, 0, 55)','rgba(0, 0, 255)', 'rgba(0, 255, 0)', 'rgba(255, 0, 0)'],
              data: ['',confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: true },
          maintainAspectRatio: true,
        animation: {
                    easing: 'easeInOutBack',
                    duration: 2000
                    },
          title: { display: true, text: `Current Situation in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            backgroundColor: 'rgba(145, 192, 248, 0.863)',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;