import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CoreLayout from 'layouts/CoreLayout'

import Home from './Home'
// import Counter from "./Counter";

export const createRoutes = store => (
  <CoreLayout>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </CoreLayout>
)

export default createRoutes
