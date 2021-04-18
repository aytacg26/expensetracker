import React, { Fragment } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';
import PropTypes from 'prop-types';

const ExpenseList = ({ items, year }) => {
  if (items.length === 0) {
    return (
      <span className='no-expense-message'>
        {year ? `No Expenses Recorded in ${year}` : 'No Expenses Found'}
      </span>
    );
  }

  return (
    <Fragment>
      {items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Fragment>
  );
};

ExpenseList.propTypes = {
  items: PropTypes.array.isRequired,
  year: PropTypes.string,
};

export default ExpenseList;
