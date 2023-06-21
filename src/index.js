import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page14 from './views/page14'
import Page8 from './views/page8'
import Page9 from './views/page9'
import Page12 from './views/page12'
import Page10 from './views/page10'
import Page13 from './views/page13'
import Page11 from './views/page11'
import Pagealternativecards from './views/pagealternativecards'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page14} exact path="/page14" />
        <Route component={Page8} exact path="/page8" />
        <Route component={Page9} exact path="/page9" />
        <Route component={Page12} exact path="/page12" />
        <Route component={Page10} exact path="/page10" />
        <Route component={Page13} exact path="/" />
        <Route component={Page11} exact path="/page11" />
        <Route
          component={Pagealternativecards}
          exact
          path="/pagealternativecards"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
