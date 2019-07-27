import React from 'react'
import ExpenseList from'./ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpesnesSummary from './ExpensesSummary'

const ExpenseDashboardPage=()=>(
    <div>
        <ExpenseListFilters />
        <ExpesnesSummary />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage