import React, { Fragment } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ items, year }) => {
  if (items.length === 0) {
    return (
      <span className='no-expense-message'>{`No Expenses Recorded in ${year}`}</span>
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

export default ExpenseList;
