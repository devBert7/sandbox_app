import "./expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = (filterYear) => {
        setFilteredYear(filterYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <Card>
            <ExpensesFilter 
                onFilterChange={filterChangeHandler} 
                selectedYear={filteredYear} 
            />
            <ExpensesChart
                expenses={filteredExpenses}
            />
            <ExpensesList 
                filteredExpenses={filteredExpenses} 
            />
        </Card>
    );
};

export default Expenses;