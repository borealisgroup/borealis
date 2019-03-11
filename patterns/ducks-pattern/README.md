# @borealisgroup/ducks-pattern

A redux modular architecture extending [re-ducks](https://github.com/alexnm/re-ducks)

## Prerequisites

- redux
- redux-thunk
- redux-actions

## Usage

See the [example](example)

## Why

### Building on the duck legacy
> Before starting, read more about the original [ducks modular approach proposal](https://github.com/erikras/ducks-modular-redux). When trying to embrace this idea in medium-large scale codebases I noticed that the single duck file becomes harder and harder to maintain and read.

To recap, a duck:
* MUST `export default` a function called `reducer()`
* MUST `export` its action creators as functions
* MAY export its action types as `UPPER_SNAKE_CASE`, if an external reducer needs to listen for them, or if it is a published reusable library

### Duck folders

Here's how a **duck** folder would look like:
```
duck/
├── duck.controllers.js
├── duck.duck.js
├── duck.selectors.js
├── duck.services.js
```
NOTE: Each duck represents a concept, feature of your app.

### General rules for a duck folder

A duck folder:
* MUST contain the **entire logic** for handling **only ONE** concept in your app, ex: product, cart, session, etc.
* MUST keep code with similar purpose in the same file, ex: duck, selectors, services, etc.
<!-- * MUST have an `index.js` file that exports according to the original duck rules. -->

The architecture should be structured by **feature** to have a modular, testable, and scalable app. All shared business logic (not specific to a feature) should be structured by **roles** (e.g. `services` or `utils` folder).

### Duck Actions
Let's start by defining the constants we will use as redux action types.

Our examples will model a real duck.
```javascript
const UPDATE_CURRENT = 'UPDATE_CURRENT';
const ADD_TASK = 'ADD_TASK';
const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
```

NOTE: you can export an action if it is needed by another duck.

### Duck Action Creators

> Redux gives us a powerful way to manage the state of our application. 
> But it also gives us a lot of code to take care of. 
> To create one update, we need to change things across many other files. 
> After a while, the code required to define and handle action creators starts to get a little repetitive.

That's why we use redux-actions. 

> [createActions](https://redux-actions.js.org/api/createaction#createactions) function reduces boilerplate code and makes sure that the actions follow the [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action) structure.
 
```js
export const {
  addTask,
  updateCurrent,
  showLoader,
  hideLoader
} = createActions(
  {
    UPDATE_CURRENT: capitalize,
    SHOW_LOADER: () => true,
    HIDE_LOADER: () => false
  },
  ADD_TASK,
)
```

NOTE: you have to use the same name for action (`CONSTANT` case) and action creators (`camelCase`)

Actions and action creators don't perform any change by themselves. Therefore, it doesn't make sense to name them imperatively like updateResource. If it was the case, it would be more descriptive to name it like createResourceUpdateAction.

That said, to make things simpler, but stay descriptive, we follow these naming conventions:

- Action types should be named as `MODULE_ACTION`. e.g. `RESOURCE_UPDATE`, `RESOURCE_UPDATE_REQUEST`;
- Action creators should have the same name as their action type, but camelCased. e.g. `resourceUpdate`, `resourceUpdateRequest`.

This way, we can read it like "_store dispatches a resource update request on resource 1 changing its title to 'Hi'_"!

```js
store.dispatch(resourceUpdateRequest(1, { title: 'Hi!' }))
```

### Duck Reducers

#### handleActions
> [handleAction](https://redux-actions.js.org/api/handleaction#handleaction) function is used to create a reducer function to handle a specific action.

```javascript
export default handleActions(
  {
    ADD_TASK: (state, action) => {
      return {
        ...state,
        currentTask: '',
        tasks: state.tasks.concat(action.payload),
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
```

#### combineActions
> We can use multiple actions to update the app’s state using the same function. combineActions function is given to us by redux-actions to handle related actions in a single action handler.

#### Normalizing
In case the state shape is more complex, you should break the reducers into multiple smaller functions that deal with a slice of the state, then combine them at the end.
Avoid nesting state by [normalizing state shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape).

### Services

All the async calls (CRUD operations). 

They should be called by the controllers (never by a component!).

```js
export const getTasks = () => {
  return fetch(baseUrl).then(res => res.json());
};
```

### Controllers

> We make this better by taking some inspiration from some mature Web technologies and frameworks. For example, let's take a look at the .NET framework and .NET MVC/Web API. […]
> 
> They have a concept of controllers, route configs, and views. There is a clear separation of responsibilities. Route configs are responsible for initializing and associating routes with controllers. Controllers are responsible for taking the inputs from the route and invoking the appropriate actions to execute. These actions can involve rendering a view or calling a service if this particular controller is responsible for an API endpoint.
> [...]
> 
> There are many reasons to make this separation, but the main reason is that you don't want to muddle the API's that the user interacts with (i.e. controllers) with how your backend actually operates (i.e. services).
> 
> There will undoubtably be use cases where your business logic (services) entirely changes, but the user never realizes you made these changes because the API's (controllers) they've been interacting with never changes. The separation is important to reduce coupling and helps you follow the single responsibility principle. Obviously this will also help with testing and writing tests.


In a simple application, you can easily dispatch simple actions and use the reducers to manage the state. However, in a more complex app you need to use some sort of middleware to handle more complex interactions. In our case, we use [redux-thunk](https://github.com/gaearon/redux-thunk).

The `controllers` file define the `interface` for our duck. You can reason about it like this: 1 controller = X actions dispatched. Thus, each controller function is **a thunk** dispatching multiple actions.

```javascript
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
```

### Selectors

If `actions` are the entry points, selectors are the exit. 
After `dispatch`ing an action, the application can use selectors to get the resulting data from the store after reducers have done something with it.

Basically, you can use selectors to get some part of the current state.
You can also use selectors to derive some data for your components from the current state.

These are the functions like: `getVisibleTasks`, `isUserAuthenticated`, etc. that take the current app state and return some derived data.

```javascript
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
```

NOTE: Selector functions will be imported from React components, so they are part of the **interface** of the duck. You should not compute derived data in your React components: the store should be responsible of the business logic as much as possible.


### index.js

Not yet used as VSCode's auto import feature is not working well when re-exporting named import.

### Tests

You can add `duck.tests.js` for testing.

See [re-ducks](https://github.com/alexnm/re-ducks) for more information.

## Thanks to

- [re-ducks](https://github.com/alexnm/re-ducks)
- [Scaling your Redux App with ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
- [Using Redux-Actions — Why and How?](https://blog.bitsrc.io/using-redux-actions-why-and-how-fd5834f13e31)
- [Redux Best Practices](https://codeburst.io/redux-actions-through-example-part-1-f5b2dc71de06)
- [Refactoring to redux-actions](https://codeburst.io/redux-actions-through-example-part-1-f5b2dc71de06)
- [Better Express Routing & Architecture for NodeJS](https://www.caffeinecoding.com/better-express-routing-for-nodejs)
- [ARc](https://github.com/diegohaz/arc/wiki/Actions)