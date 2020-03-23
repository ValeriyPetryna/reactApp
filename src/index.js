import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import CounterFunc from './CounterFunc';

ReactDOM.render(
  <React.StrictMode>
    <Counter speed = {1000}/>
    <Counter speed = {100} />
    <CounterFunc speed = {500}  />
  </React.StrictMode>,
  document.getElementById('root')
);
