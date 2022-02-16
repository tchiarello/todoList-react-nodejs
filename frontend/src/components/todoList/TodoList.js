import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../utils/utils';
import Header from '../header/Header';
import Task from '../task/Task';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const res = await fetchItems();
      setTasks(res);
    };

    getTasks();
  }, []);

  console.log(tasks);

  return (
    <div>
      <Header />
      <div>
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TodoList;
