import { combineReducers } from 'redux';
import artist from './ArtistReducer';
import shots from './ShotsReducer';
import shot from './ShotReducer';

export default combineReducers({
  shots,
  artist,
  shot,
});
