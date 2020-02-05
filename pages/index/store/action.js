import { get_list } from './type';
import api from '../../../api';
const { getList } = api.home;

export default {
  getList() {
    return (dispatch, getState) => {
      return getList({id: 110}).then((res) => {
        dispatch(retParams(get_list, res))
      })
    }
  }
}

function retParams(type, payload) {
  return {type, payload}
}