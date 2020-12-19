import { combineReducers } from 'redux';

import booking from './booking/booking';
import login from './login/login';

const reducer = combineReducers({
  booking,
  login,
});

export default reducer;
