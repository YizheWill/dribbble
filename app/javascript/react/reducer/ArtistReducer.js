import { RECEIVE_ARTIST } from '../Actions/ArtistActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_ARTIST:
      return action.payload.artist;
    default:
      return preState;
  }
};
