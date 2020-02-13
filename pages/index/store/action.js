import type from './type';
import api from '_api';

const { get_list } = type;
const { getList } = api.home;

export default {
  getList() {
    return (dispatch, getState) => {
      return getList({id: 110}).then((res) => {
        dispatch(retParams(get_list, res))
      }).catch(() => dispatch(retParams(get_list, [])))
    }
  }
}

function retParams(type, payload) {
  return {type, payload}
}