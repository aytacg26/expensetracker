import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import PropTypes from 'prop-types';

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`$${amount}`}</div>
      </div>
    </div>
  );
};

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ExpenseItem;
