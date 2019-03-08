const baseUrl = process.env.REACT_APP_BASE_URL;

// REST naming conventions: get, post, put, delete

export const getTasks = () => {
  return fetch(baseUrl).then(res => res.json());
};

export const postTask = name => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      isComplete: false,
    }),
  }).then(res => res.json());
};

export const putTask = task => {
  return fetch(`${baseUrl}/${task.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  }).then(res => res.json());
};

export const deleteTask = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
