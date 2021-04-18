import React from 'react';
import './ExpensesFilter.css';
import { createArrayRange } from '../../utils/helpers';
import PropTypes from 'prop-types';

const ExpenseFilter = ({ onYearSelect, selected, initYear }) => {
  const currentYear = new Date().getFullYear();
  const years = createArrayRange(initYear, currentYear);
  const handleChange = (e) => {
    onYearSelect(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter Expenses</label>
        <select value={selected} onChange={handleChange}>
          <option value=''>All</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

ExpenseFilter.propTypes = {
  onYearSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
  initYear: PropTypes.number.isRequired,
};

export default ExpenseFilter;
