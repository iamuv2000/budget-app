import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from'./selectors/expenses'
import { Provider } from 'react-redux'
import './firebase/firebase'

const store=configureStore()

const expenseOne= store.dispatch(addExpense({description: 'Water Bill', amount:100, createdAt:100}))
const expenseTwo= store.dispatch(addExpense({description: 'Gas Bill', amount:10000, createdAt:130}))
const expenseThree= store.dispatch(addExpense({description: 'Rent', amount:300, createdAt:1}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

