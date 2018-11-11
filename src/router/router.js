import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '@/components/layout';
import Home from '@/views/Home';
import Login from '@/views/login/login';
// const Home = (location, cb) => { require.ensure([], (require) => { cb(null, require('@/views/Home').default) }, 'Home') };

const appRouter = (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Layout>);

// const otherRouter = 

const routers = (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" render={props => appRouter} />
    </Switch>
  </Router>
);
export default routers;