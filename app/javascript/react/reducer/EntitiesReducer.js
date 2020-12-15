import { combineReducers } from 'redux';
import artist from './ArtistReducer';
import shots from './ShotsReducer';
import shot from './ShotReducer';
import collections from './CollectionsReducer';
import collection from './CollectionReducer';

export default combineReducers({
  shots,
  artist,
  shot,
  collections,
  collection,
});
