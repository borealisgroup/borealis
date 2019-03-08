import {
  showLoader,
  loadTasks,
  hideLoader,
  addTask,
  replaceTask,
  removeTask,
} from './task.duck';
import { getTasks, postTask, putTask, deleteTask } from './task.services';

export const fetchTasks = () => {
  return dispatch => {
    dispatch(showLoader());
    getTasks().then(tasks => {
      dispatch(loadTasks(tasks));
      dispatch(hideLoader());
    });
  };
};

export const saveTask = name => {
  return dispatch => {
    dispatch(showLoader());
    postTask(name).then(res => {
      dispatch(addTask(res));
      dispatch(hideLoader());
    });
  };
};

export const toggleTask = id => {
  return (dispatch, getState) => {
    dispatch(showLoader());
    const { tasks } = getState();
    const task = tasks.find(t => t.id === id);
    const toggled = {
      ...task,
      isComplete: !task.isComplete,
    };
    putTask(toggled).then(res => {
      dispatch(replaceTask(res));
      dispatch(hideLoader());
    });
  };
};

export const destroyTask = id => {
  return dispatch => {
    dispatch(showLoader());
    deleteTask(id).then(() => {
      dispatch(removeTask(id));
      dispatch(hideLoader());
    });
  };
};
