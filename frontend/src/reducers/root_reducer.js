import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import EntititiesReducer from './entities_reducer';

const RootReducer = combineReducers({
  entities: EntititiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: uiReducer
});

export default RootReducer;