import * as types from '../../../../assets/types';

const initialState = {
  userName: '',
  win: 0,
  loose: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_NAME:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};