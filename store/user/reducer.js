import type from './type';

const { get_use_info, set_ln } = type;

const defaultState = {
  info: null,
  ln: 'en'
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case get_use_info:
      return {...state, info: payload};
    case set_ln:
      return {...state, ln: payload};
    default:
      break;
  }
  return state;
}