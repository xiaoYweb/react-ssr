import { get_use_info } from './type';

const defaultState = {
  info: null,
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case get_use_info:
      return payload;
    default:
      break;
  }
  return state;
}