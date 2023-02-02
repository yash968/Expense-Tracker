import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2021,2 ,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 1000;

   

    console.log("my props", props);
  return (
    <div className="expense-item">
      <ExpenseDate
       date = {props.date} 
       />
    {/**since this is a date object it cannot be directly passed as normal text */}
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;