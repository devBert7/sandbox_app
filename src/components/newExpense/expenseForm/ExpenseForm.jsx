import "./expenseForm.css";
import {useState} from "react";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState(''),
        [enteredAmount, setEnteredAmount] = useState(''),
        [enteredDate, setEnteredDate] = useState('');
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    
    const submitHandler = (event) => {
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} placeholder="Entry Name" value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" placeholder="eg: 12.37" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button className="submit">
                    Add Expense
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;