import React from 'react';
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2023, 6, 13)
        },
        {
            id: 'e2',
            title: "Steak",
            amount: 42.39,
            date: new Date(2023, 6, 13)
        },
        {
            id: 'e3',
            title: "Paper Towels",
            amount: 12.38,
            date: new Date(2023, 6, 13)
        },
        {
            id: 'e4',
            title: "Grapes",
            amount: 5.65,
            date: new Date(2023, 6, 13)
        }
    ];
    
    return (
        <div>
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;