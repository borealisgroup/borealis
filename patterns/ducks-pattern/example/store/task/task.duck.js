import { createActions, handleActions, combineActions } from 'redux-actions';

const initialState = {
  tasks: [],
  currentTask: '',
  isLoading: true,
  message: '',
};

const capitalize = text => {
  return text.split('').reduce((acc, letter, idx) => {
    return idx === 0 ? letter.toUpperCase() : `${acc}${letter.toLowerCase()}`;
  }, '');
};

const UPDATE_CURRENT = 'UPDATE_CURRENT';
const ADD_TASK = 'ADD_TASK';
const LOAD_TASKS = 'LOAD_TASKS';
const REPLACE_TASK = 'REPLACE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

export const {
  updateCurrent,
  loadTasks,
  addTask,
  replaceTask,
  removeTask,
  showLoader,
  hideLoader,
} = createActions(
  {
    [UPDATE_CURRENT]: capitalize,
    [SHOW_LOADER]: () => true,
    [HIDE_LOADER]: () => false,
  },
  LOAD_TASKS,
  ADD_TASK,
  REPLACE_TASK,
  REMOVE_TASK
);

export default handleActions(
  {
    ADD_TASK: (state, action) => {
      return {
        ...state,
        currentTask: '',
        tasks: state.tasks.concat(action.payload),
      };
    },
    LOAD_TASKS: (state, action) => {
      return {
        ...state,
        tasks: action.payload,
      };
    },
    UPDATE_CURRENT: (state, action) => {
      return {
        ...state,
        currentTask: action.payload,
      };
    },
    REPLACE_TASK: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    },
    REMOVE_TASK: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload),
      };
    },
    [combineActions(SHOW_LOADER, HIDE_LOADER)]: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
  initialState
);
