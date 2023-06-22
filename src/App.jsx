import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2019, 6, 13)
    },
    {
        id: 'e2',
        title: "Steak",
        amount: 42.39,
        date: new Date(2022, 6, 13)
    },
    {
        id: 'e3',
        title: "Paper Towels",
        amount: 12.38,
        date: new Date(2020, 6, 13)
    },
    {
        id: 'e4',
        title: "Grapes",
        amount: 5.65,
        date: new Date(2022, 6, 13)
    }
];

const App = () => {
    const [expensesArr, setExpensesArr] = useState(DUMMY_EXPENSES);
    
    const addExpenseHandler = (expense) => {
        setExpensesArr((previousExpenses) => {
            return [
                expense,
                ...previousExpenses
            ];
        });
    };
    
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expensesArr} />
        </div>
    );
};

export default App;