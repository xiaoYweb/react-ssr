import api from '_api';
import { set_ln } from './type';
const { setLanguage } = api.home;

export default {
  setLn(ln) {
    return (dispatch, getState) => {
      return setLanguage({ln}).then(() => {
        dispatch({type: set_ln, payload: ln})
      })
    }
  }
}