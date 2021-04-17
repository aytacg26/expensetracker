import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount, onClick }) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`$${amount}`}</div>
      </div>
      <button onClick={onClick}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
