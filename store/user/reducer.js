import type from './type';

const { get_use_info, set_ln, set_name } = type;

const defaultState = {
  info: null,
  ln: 'en',
  name: 'Michael'
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case get_use_info:
      return {...state, info: payload};
    case set_ln:
      return {...state, ln: payload};
    case set_name:
      return {...state, name: payload};
    default:
      break;
  }
  return state;
}
