import React from 'react';
import { Chart, Axis, Series, Line } from 'react-charts';

const chartData = [
  {
    data: [
      [1, 2],
      [2, 15],
      [3, 5],
      [4, 6],
      [5, 6],
      [6, 8],
      [7, 4],
      [8, 9],
      [9, 3],
      [10, 4],
      [11, 20],
      [12, 10],
      [13, 13],
      [14, 18],
    ],
  },
];

const SimpleChart = ({
}) => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <Chart data={chartData}>
        <Axis primary type="ordinal" position="bottom" />
        <Axis type="linear" position="left" stacked />
        <Series type={Line} />
      </Chart>
    </div>
  )
}
export default SimpleChart;
