import { get_list } from './type';

const defaultState = {
  name: 'leo',
  list: []
}

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case get_list:
      return { ...state, list: payload }
    default:
      break;
  }
  return state;
}