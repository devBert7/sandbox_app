import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (filterYear) => {
        setFilteredYear(filterYear);
    }
    
    return (
        <Card>
            <ExpensesFilter onFilterChange={filterChangeHandler} selectedYear={filteredYear} />
            {
                expenses.map((expenses) => {
                        return <ExpenseItem
                            title={expenses.title}
                            amount={expenses.amount}
                            date={expenses.date}
                        />
                    }
                )
            }
        </Card>
    );
};

export default Expenses;