import './ExpenseDate.css';
function ExpenseDate (props) {

    console.log('this is props >>', props)
    const month = props.date.toLocaleString('en-US', {month : 'long'});

    const year = props.date.getFullYear();

    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
console.log("my props" ,  props);
return (
    <div className="expense-date">
    <div className = "expense-date__month">{month}</div>
    <div className = "expense-date__year">{year}</div>
    <div className = "expense-date__day">{day}</div>
</div> 
);
}
export default ExpenseDate;
