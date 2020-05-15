import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Photos from './pages/Photos'
import Posts from './pages/Posts'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Photos />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes