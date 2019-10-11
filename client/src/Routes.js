import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </div>
)

export default Routes
