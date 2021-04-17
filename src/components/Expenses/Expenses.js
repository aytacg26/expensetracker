import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const yearSelectHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses =
    selectedYear === ''
      ? expenses
      : expenses.filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        );

  return (
    <div className='expenses'>
      <ExpenseFilter selected={selectedYear} onYearSelect={yearSelectHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
};

export default Expenses;
