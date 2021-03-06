import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import About from './pages/About'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={Logon} />
            </Switch>
        </BrowserRouter>
    )
}

