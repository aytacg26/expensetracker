import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'expense-00011219',
      title: 'New Home',
      amount: 485000,
      date: new Date(2019, 1, 26),
    },
    {
      id: 'expense-42091219',
      title: 'New Car',
      amount: 65000,
      date: new Date(2020, 1, 26),
    },
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
      amount: 475,
      date: new Date(2021, 3, 3),
    },
  ]);

  const formSubmitHandler = (formData) => {
    setExpenses((prevState) => [...prevState, formData]);
  };

  return (
    <div className='App'>
      <NewExpense onSubmit={formSubmitHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
