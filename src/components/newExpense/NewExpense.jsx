import "./newExpense.css";
import ExpenseForm from "./expenseForm/ExpenseForm";

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    );
};

export default NewExpense;