import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: '', date: '', amount: '' });
  const [showForm, setShowForm] = useState(false);
  const { title, date, amount } = formData;

  const inputHandler = (e) => {
    const { name, value } = e.target;

    //When state depends on the previous state, it is better to use functional structure in setState function!!
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const id = `expense-${(Math.random() + 1) * 10}`;
    const date = new Date(formData.date);

    if (title !== '' && date !== '' && amount !== '') {
      const revisedFormData = { ...formData, date, id };
      setFormData({ title: '', date: '', amount: '' });
      setShowForm((prevState) => !prevState);
      onSubmit(revisedFormData);
    }
  };

  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  if (!showForm) {
    return <button onClick={showFormHandler}>Add New Expense</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            onChange={inputHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            name='amount'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={inputHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            name='date'
            placeholder='Date'
            value={date}
            min='2018-01-01'
            max='2030-12-31'
            onChange={inputHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={showFormHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
