import { combineReducers } from 'redux';
import EntitiesReducer from './EntitiesReducer';
import SessionReducer from './SessionReducer';
import UiReducer from './UiReducer';
import ErrorsReducer from './ErrorsReducer';

export default combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  ui: UiReducer,
  errors: ErrorsReducer,
});
