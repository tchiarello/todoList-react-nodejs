import React, { useEffect, useState } from 'react';
import { getItems, postItems } from '../../utils/utils';
import Header from '../header/Header';
import Task from '../task/Task';

const TodoList = () => {
  const [tasks, setTasks] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const getTasks = async () => {
      const res = await getItems();
      setTasks(res);
    };

    getTasks();
  }, []);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!value) return;

    const params = { task: value };

    try {
      await postItems(params);

      setTasks((curr) => ({ ...curr, allTasks: [...curr.allTasks, params] }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <form onClick={onSubmit}>
          <input
            type="text"
            value={value}
            onChange={handleOnChange}
            placeholder="What needs to be done?"
            required
          />
          <button type="submit" disabled={!value}>
            Add
          </button>
        </form>

        <div>
          {!tasks && <p>Empty list</p>}
          {tasks &&
            tasks.allTasks.map((task, index) => (
              <Task key={index} item={task} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
