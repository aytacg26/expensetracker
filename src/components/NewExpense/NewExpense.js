import React from 'react'; //in new create-react-app projects we do not need to import React
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onSubmit }) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewExpense;
