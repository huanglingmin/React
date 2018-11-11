import React from 'react';
import ReactDOM from 'react-dom';
import routers from '@/router/router';
import './index.css';

import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {
  render () {
    return routers;
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();