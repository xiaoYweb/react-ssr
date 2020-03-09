import api from '_api';
import type from './type';

const { setLanguage, setName } = api.home;
const { set_ln, set_name } = type;


export default {
  setLn(ln) {
    return (dispatch, getState) => {
      return setLanguage({ln}).then(() => {
        dispatch(retParams(set_ln, ln))
      })
    }
  },
  setName(name) {
    console.log("setName -> dispatch")
    return dispatch => {
      return setName({name}).then(() => {
        dispatch(retParams(set_name, name))
      })
    }
  }
}

function retParams(type, payload) {
  return {type, payload}
}