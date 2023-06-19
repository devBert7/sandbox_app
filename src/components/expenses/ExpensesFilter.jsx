import './expensesFilter.css';

//todo:
// Listen for changes on the dropdown & when user does select new year (new state), ensure it's forwarded to the expenses component
// Place filter next to card in ExpenseItem.jsx and wrap those two in a div
// Forward the picked year from the expense filter to the expenses component, where it will be stored in a state

const ExpensesFilter = ({onFilterChange, selectedYear}) => {
    const dropdownChangeHandler = (event) => {
        onFilterChange(event.target.value);
    }
    
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={dropdownChangeHandler} value={selectedYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;