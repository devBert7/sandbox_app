import "./expenseItem.css";

const ExpenseItem = ({date, title, amount}) => {
    const month = date.toLocaleString('en-US', {month: 'long'}),
        day = date.toLocaleString('en-US', {day: '2-digit'}),
        year = date.getFullYear();
    
    return (
        <div className="expense-item" >
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            {/*<div>
                {date.toISOString()}
            </div>*/}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;