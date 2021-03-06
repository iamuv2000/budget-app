import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {startSetExpenses} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from'./selectors/expenses'
import { Provider } from 'react-redux'
import {firebase} from './firebase/firebase'
// import '../playground/promises'

const store=configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))
store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'))
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log('Logged In')
    }
    else{
        console.log('Logged out')
    }
})