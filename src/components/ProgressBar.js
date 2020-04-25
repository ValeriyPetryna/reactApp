import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import {AppContext} from '../context/context';

const Progress = () => {
  const { tasks } = useContext(AppContext);
  const taskList = tasks.map((task) => 
    <div key={task.id} className='elem'>
      {<ProgressBar now = {task.current} max = {task.threshold} label={`${task.threshold}`}  />}
    </div>
  )

  if (taskList.length) {
    return (
      <div className='elem'>
        {taskList}
      </div>
    );
  } 
}

export default Progress;