import { combineReducers } from "redux";
import counter from './counter/reducerCounter'
import user from './user/reducerUser';

const rootReducer = combineReducers({
    counter,
    user
    
})



export default rootReducer