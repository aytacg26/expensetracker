import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar/ChartBar';
import PropTypes from 'prop-types';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.array.isRequired,
};

export default Chart;
