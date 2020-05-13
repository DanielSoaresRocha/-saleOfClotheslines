import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logonf'
import About from './pages/About'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}

