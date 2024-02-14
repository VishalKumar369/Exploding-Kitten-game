import * as types from '../../../../assets/types'
import DeckOfCard from '../../../../assets/DeckOfCard';
// import { addOrUpdateObject } from '../../utils/AddorUpdateObject';
import userServices from '../../../../shared/services/userService';

export const startGame = () => dispatch => {
  dispatch({ type: types.START_GAME, payload:DeckOfCard() });
};

export const gameOver = (user, dispatch) => {
  const data = {...user, loose: parseInt(user.loose)+1 }

  dispatch({
    type: types.SET_USER_NAME,
    payload: data
  })

  const dData = {UserName:data.userName, Win:data.win, Loose:data.loose};
  console.log("data",data,dData);
  addOrUpdateObject(data);
  // userServices.create(dData).then(()=>dispatch({
  //   type: types.SET_USER_NAME,
  //   payload: data
  // })).catch(e=> console.log("error", e))
  
  return { type: types.GAME_OVER };
};

export const gameResult = (user, dispatch) => {
  const data = {...user, win: parseInt(user.win)+1 }

  dispatch({
    type: types.SET_USER_NAME,
    payload: data
  })

  addOrUpdateObject(data);
  // const dData = {UserName:data.userName, Win:data.win, Loose:data.loose};
  // userServices.create(dData ).then(()=>dispatch({
  //   type: types.SET_USER_NAME,
  //   payload: data
  // })).catch(e=> console.log("error", e))
  return { type: types.GAME_WON };
};