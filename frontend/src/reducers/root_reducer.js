import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import EntititiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: EntititiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
});

export default RootReducer;