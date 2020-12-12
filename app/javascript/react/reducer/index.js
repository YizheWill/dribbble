import { combineReducers } from 'redux';
import EntitiesReducer from './EntitiesReducer';
import SessionReducer from './SessionReducer';
import UiReducer from './UiReducer';
import UserReducer from './UserReducer';
import ErrorsReducer from './ErrorsReducer';

export default combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  user: UserReducer,
  ui: UiReducer,
  errors: ErrorsReducer,
});
