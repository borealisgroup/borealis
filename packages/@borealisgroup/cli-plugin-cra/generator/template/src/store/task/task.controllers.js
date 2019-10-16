import {
  taskShowLoader,
  taskLoad,
  taskHideLoader,
  taskAdd,
  taskReplace,
  taskRemove,
} from './task.duck';
import { fetchTasks, postTask, putTask, deleteTask } from './task.services';

export const taskFetch = () => {
  return dispatch => {
    dispatch(taskShowLoader());
    fetchTasks().then(tasks => {
      dispatch(taskLoad(tasks));
      dispatch(taskHideLoader());
    });
  };
};

export const taskSave = name => {
  return dispatch => {
    dispatch(taskShowLoader());
    postTask(name).then(res => {
      dispatch(taskAdd(res));
      dispatch(taskHideLoader());
    });
  };
};

export const taskToggle = id => {
  return (dispatch, getState) => {
    dispatch(taskShowLoader());
    const { tasks } = getState();
    const task = tasks.find(t => t.id === id);
    const toggled = {
      ...task,
      isComplete: !task.isComplete,
    };
    putTask(toggled).then(res => {
      dispatch(taskReplace(res));
      dispatch(taskHideLoader());
    });
  };
};

export const taskDelete = id => {
  return dispatch => {
    dispatch(taskShowLoader());
    deleteTask(id).then(() => {
      dispatch(taskRemove(id));
      dispatch(taskHideLoader());
    });
  };
};
