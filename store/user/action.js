import api from '_api';
import type from './type';

const { setLanguage } = api.home;
const { set_ln } = type;


export default {
  setLn(ln) {
    return (dispatch, getState) => {
      return setLanguage({ln}).then(() => {
        dispatch({type: set_ln, payload: ln})
      })
    }
  }
}