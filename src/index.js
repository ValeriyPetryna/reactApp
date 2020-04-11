import * as React from 'react';
import ReactDOM from 'react-dom';
import { AppContextProvider } from './context/context'

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//components
import ActiveTasks from './components/ActiveTasks';
import Counter from './components/Counter';
import ResolvedTasks from './components/ResolvedTasks';
import TimeCounter from './components/TimeCounter';
import Progress from './components/ProgressBar';
import StrategySelector from './components/Selector';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
    <fieldset>
    <div className = "field">
      <div className = "field-left">
        <div className = "field-left-top">
          <Counter  className = "ticker" name = {'Ticks'} />
          <TimeCounter  className = "ticker" param = {'seconds'}  name = {'Seconds'}/>
          <ActiveTasks  className = "ticker" param = {'active'}  name = {'Active'}/>
          <ResolvedTasks  className = "ticker" param = {'resolved'}  name = {'Resolved'}/>
        </div>
        <div className = "field-left-bottom">
          <StrategySelector />
        </div>
      </div>
      
      <div className = "field-right">
        <h2 className = "elem">Progress</h2>
        <Progress speed = {20} />
      </div>
    </div>
    </fieldset>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
