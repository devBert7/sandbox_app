import "./expenseDate.css";

const ExpenseDate = ({date}) => {
    const month = date.toLocaleString('en-US', {month: 'long'}),
        day = date.toLocaleString('en-US', {day: '2-digit'}),
        year = date.getFullYear();
    
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;