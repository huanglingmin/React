import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'element-react';
// import 'element-theme-default';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Button type="primary">Hello</Button>, document.getElementById('root'));
registerServiceWorker();
