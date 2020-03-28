import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import CounterFunc from './CounterFunc';
import Progress from './ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <fieldset>
    <div className = "field">
    <div className = "field-left">
        <CounterFunc className = "ticker" speed = {2000} name = {'Ticks'} />
        <Counter className = "ticker" speed = {1000} name = {'Seconds'}/>
        <Counter className = "ticker" speed = {700} name = {'Active'}/>
        <Counter className = "ticker" speed = {800} name = {'Resolved'}/>
      </div>
      <div className = "field-right">
        <Progress speed = {20}/>
        <Progress speed = {18}/>
        <Progress speed = {33}/>
        <Progress speed = {16}/>
      </div>
    </div>
    </fieldset>
  </React.StrictMode>,
  document.getElementById('root')
);
