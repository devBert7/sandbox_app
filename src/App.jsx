import React from 'react';
import ExpenseItem from "./components/ExpenseItem";

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
            <ExpenseItem 
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem 
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem 
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem 
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </div>
    );
};

export default App;