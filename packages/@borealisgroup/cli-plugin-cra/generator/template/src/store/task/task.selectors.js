const getTasks = state => {
  return state.tasks;
};

export const getVisibleTasks = (state, props) => {
  const { tasks } = getTasks(state);
  const { filter } = props;

  switch (filter) {
    case 'active':
      return tasks.filter(t => !t.isComplete);
    case 'completed':
      return tasks.filter(t => t.isComplete);
    default:
      return tasks;
  }
};
