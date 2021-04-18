import React from 'react'; //in new create-react-app projects we do not need to import React
import ExpenseForm from './ExpenseForm/ExpenseForm';
import './NewExpense.css';
import PropTypes from 'prop-types';

const NewExpense = ({ onSubmit }) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

NewExpense.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewExpense;
