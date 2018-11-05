import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import { Button } from 'element-react';

import Layout from '@/components/layout';
import Home from '@/views/Home';

const appRouter = (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Button type="primary">Hello</Button>
    </Switch>
  </Layout>);

// const otherRouter = 

const routers = (
  <Router>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" render={ props => appRouter}/>
    </Switch>
  </Router>
);
export default routers;