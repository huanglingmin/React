import React from 'react';
import 'element-theme-default';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import Home from '@/views/Home';
class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
export default App;