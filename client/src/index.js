import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import history from './history'

const App = () => (
    <Router history={history}>
        <Routes /> 
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

export default App