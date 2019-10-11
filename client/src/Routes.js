import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './Main'

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </div>
)

export default Routes
