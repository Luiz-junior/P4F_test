import { combineReducers } from 'redux'

import clientsReducer from './clientsReducer'

const reducers = combineReducers({
  clientsReducer,
});

export default reducers