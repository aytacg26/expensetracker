import React, { useState } from 'react';
import { filterExpenses } from '../../utils/helpers';
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import './Expenses.css';
import PropTypes from 'prop-types';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const yearSelectHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = filterExpenses(selectedYear, expenses);

  return (
    <div className='expenses'>
      <ExpenseFilter
        selected={selectedYear}
        onYearSelect={yearSelectHandler}
        initYear={2018}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} year={selectedYear} />
    </div>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default Expenses;
