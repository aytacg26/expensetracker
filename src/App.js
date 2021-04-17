import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'expense-02011210',
      title: 'Car Insurance',
      amount: 234.5,
      date: new Date(2021, 2, 30),
    },
    {
      id: 'expense-02434811',
      title: 'Mobile Phone Installment',
      amount: 34.56,
      date: new Date(2021, 3, 2),
    },
    {
      id: 'expense-53714669',
      title: 'Car Installment',
      amount: 145,
      date: new Date(2021, 3, 3),
    },
  ]);

  const clickHandler = (id) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? { ...expense, title: 'Updated' } : expense
    );

    setExpenses(updatedExpenses);
  };

  const formSubmitHandler = (formData) => {
    setExpenses((prevState) => [...prevState, formData]);
  };

  return (
    <div className='App'>
      <NewExpense onSubmit={formSubmitHandler} />
      <Expenses expenses={expenses} onClick={clickHandler} />
    </div>
  );
};

export default App;
