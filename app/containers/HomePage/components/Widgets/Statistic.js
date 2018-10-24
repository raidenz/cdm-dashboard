// the big bar chart
import React from 'react';
import { Chart, Axis, Series, Bar } from 'react-charts';
import CardFooterLink from '../CardFooterLink';

const chartData = [
  {
    data: [[1, 2], [2, 15], [3, 5], [4, 6], [5, 6], [6, 8]],
  },
];

const Statistic = ({
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{ height: 500, width: '100%' }}>
          <Chart data={chartData}>
            <Axis primary type="ordinal" position="bottom" />
            <Axis type="linear" position="left" stacked />
            <Series type={Bar} />
          </Chart>
        </div>
      </div>
      <CardFooterLink />
    </div>
  )
}
export default Statistic;
