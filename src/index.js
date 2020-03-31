import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import CounterFunc from './CounterFunc';
import Progress from './ProgressBar';
import { AppContextProvider } from './context/context'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
    <fieldset>
    <div className = "field">
    <div className = "field-left">
        <CounterFunc className = "ticker" speed = {2000} name = {'Ticks'} />
        <Counter className = "ticker" speed = {1000} name = {'Seconds'}/>
        <Counter className = "ticker" speed = {700} name = {'Active'}/>
        <Counter className = "ticker" speed = {800} name = {'Resolved'}/>
      </div>
      <div className = "field-right">
        <h2 className = "elem">Progress</h2>
        <Progress speed = {20}/>
      </div>
    </div>
    </fieldset>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
