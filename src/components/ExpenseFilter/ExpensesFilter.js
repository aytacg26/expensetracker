import React from 'react';
import './ExpensesFilter.css';

const ExpenseFilter = ({ onYearSelect, selected }) => {
  const handleChange = (e) => {
    onYearSelect(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter Expenses</label>
        <select value={selected} onChange={handleChange}>
          <option value=''>Select Year</option>
          <option value='2018'>2018</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
