import { combineReducers } from 'redux';
import artist from './ArtistReducer';
import shots from './ShotsReducer';
import shot from './ShotReducer';
import collections from './CollectionsReducer';
import collection from './CollectionReducer';
import shotcomments from './ShotCommentsReducer';
import usercomments from './UserCommentsReducer';

export default combineReducers({
  shots,
  artist,
  shot,
  collections,
  collection,
  shotcomments,
  usercomments,
});
