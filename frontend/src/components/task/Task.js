import React from 'react';
import './Task.css';

const Task = ({ id, task, updateTask }) => {
  const disableEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
    // https://stackoverflow.com/questions/41359780/disable-enter-in-input-box
  };

  return (
    <div className="task-content">
      <textarea
        className="task-area"
        onBlur={(event) => updateTask(id, event.target.value)}
        onKeyDown={disableEnter}
      >
        {task}
      </textarea>
    </div>
  );
};

export default Task;
