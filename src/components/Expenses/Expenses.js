import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses, onClick }) => {
  return (
    <div className='expenses'>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          onClick={() => onClick(expense.id)}
        />
      ))}
    </div>
  );
};

export default Expenses;
