import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import Routes from './Routes'
import history from './history'

const App = () => (
    <Router history={history}>
        <Routes /> 
    </Router>
)

export default App