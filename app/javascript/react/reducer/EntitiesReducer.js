import { combineReducers } from 'redux';
import user from './UserReducer';
import shots from './ShotsReducer';

export default combineReducers({
  shots,
  user,
});
