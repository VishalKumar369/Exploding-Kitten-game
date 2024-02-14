import * as types from '../../../../assets/types';

export const setUserName = (userName,win,loose) => (dispatch, getState) => {
  dispatch({
    type: types.SET_USER_NAME,
    payload: {
      userName: userName,
      win: win,
      loose: loose
    }
  })
}