import { combineReducers } from "redux";
import cartReducers from "../../../features/play-ground/applications/reducers/cardReducers";
import userReducer from "../../../features/user/applications/reducers"

const rootReducer = combineReducers({
    card:cartReducers,
    user:userReducer,
    
})

export default rootReducer;