import { combineReducers } from 'redux';
import artist from './ArtistReducer';
import shots from './ShotsReducer';

export default combineReducers({
  shots,
  artist,
});
