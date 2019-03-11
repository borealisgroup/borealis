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

const TASK_UPDATE_CURRENT = 'TASK_UPDATE_CURRENT';
const TASK_ADD = 'TASK_ADD';
const TASK_LOAD = 'TASK_LOAD';
const TASK_REPLACE = 'TASK_REPLACE';
const TASK_REMOVE = 'TASK_REMOVE';
const TASK_SHOW_LOADER = 'TASK_SHOW_LOADER';
const TASK_HIDE_LOADER = 'TASK_HIDE_LOADER';

export const {
  taskUpdateCurrent,
  taskLoad,
  taskAdd,
  taskReplace,
  taskRemove,
  taskShowLoader,
  taskHideLoader,
} = createActions(
  {
    [TASK_UPDATE_CURRENT]: capitalize,
    [TASK_SHOW_LOADER]: () => true,
    [TASK_HIDE_LOADER]: () => false,
  },
  TASK_LOAD,
  TASK_ADD,
  TASK_REPLACE,
  TASK_REMOVE
);

export default handleActions(
  {
    TASK_ADD: (state, action) => {
      return {
        ...state,
        currentTask: '',
        tasks: state.tasks.concat(action.payload),
      };
    },
    TASK_LOAD: (state, action) => {
      return {
        ...state,
        tasks: action.payload,
      };
    },
    TASK_UPDATE_CURRENT: (state, action) => {
      return {
        ...state,
        currentTask: action.payload,
      };
    },
    TASK_REPLACE: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map(t =>
          t.id === action.payload.id ? action.payload : t
        ),
      };
    },
    TASK_REMOVE: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter(t => t.id !== action.payload),
      };
    },
    [combineActions(TASK_SHOW_LOADER, TASK_HIDE_LOADER)]: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
  initialState
);
