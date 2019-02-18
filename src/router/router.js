import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '@/components/layout';
import Home from '@/views/Home';
import Login from '@/views/login/login';
import Register from '@/views/register/register';
import ForgetPassword from '@/views/forgetPassword/forgetPassword';
import RichEditor from '@/views/richEditor';
// const Home = (location, cb) => { require.ensure([], (require) => { cb(null, require('@/views/Home').default) }, 'Home') };

const appRouter = (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/richEditor" component={RichEditor} />
    </Switch>
  </Layout>);

// const otherRouter = (
//   <Route exact path="/login" component={Login} />
// );

const routers = (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgetPassword" component={ForgetPassword} />
      <Route exact path="*" render={props => appRouter} />
    </Switch>
  </Router>
);
export default routers;