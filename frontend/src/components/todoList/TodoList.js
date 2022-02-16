import React, { useEffect, useState } from 'react';
import { getItems, postItems, updateItem, deleteItem } from '../../utils/utils';
import Header from '../header/Header';
import Task from '../task/Task';
import './TodoList.css';

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
      const createdItem = await postItems(params);

      setTasks((curr) => ({
        ...curr,
        allTasks: [...curr.allTasks, createdItem],
      }));
      setValue('');
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (id, task) => {
    const params = { task };

    try {
      await updateItem(id, params);
    } catch (err) {
      console.error(err);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteItem(id);

      setTasks((curr) => ({
        ...curr,
        allTasks: curr.allTasks.filter((task) => task._id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(tasks);

  return (
    <div>
      <Header />
      <div>
        <form onClick={onSubmit}>
          <input
            type="text"
            className="task-input"
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
            tasks.allTasks.map(({ _id: id, task }, index) => (
              <div className="task-container" key={index}>
                <Task id={id} task={task} updateTask={updateTask} />
                <button type="button" onClick={() => removeTask(id)}>
                  X
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
