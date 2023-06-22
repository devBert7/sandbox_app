import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    let expensesContent = <p>No Expenses Found</p>;
    
    const filterChangeHandler = (filterYear) => {
        setFilteredYear(filterYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        });
    }
    
    return (
        <Card>
            <ExpensesFilter onFilterChange={filterChangeHandler} selectedYear={filteredYear} />
            {
                expensesContent
            }
        </Card>
    );
};

export default Expenses;