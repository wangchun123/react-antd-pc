import action from './actions';

const initialState = {
  visibilityFilter: 1123123123213,
  todos: [],
};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default todoApp;
