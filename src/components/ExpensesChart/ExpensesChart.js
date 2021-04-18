import React from 'react';
import Chart from '../Chart/Chart';
import PropTypes from 'prop-types';

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0,
    },
    {
      label: 'Apr',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'Jun',
      value: 0,
    },
    {
      label: 'Jul',
      value: 0,
    },
    {
      label: 'Aug',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); //index for the datapoint array
    chartDataPoints[expenseMonth].value += parseFloat(expense.amount);
  }

  return expenses.length > 0 ? <Chart dataPoints={chartDataPoints} /> : null;
};

ExpensesChart.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpensesChart;
