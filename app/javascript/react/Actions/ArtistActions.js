import { BackendGetArtist } from '../Api/ArtistApi';

export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtist = (artist) => ({
  type: RECEIVE_ARTIST,
  payload: {
    artist,
  },
});

export const fetchArtist = (artistId) => (dispatch) => {
  BackendGetArtist(artistId).then((res) => {
    if (res.error) {
      console.log('error receiving artist in artistAction', res.error);
    } else {
      dispatch(receiveArtist(res));
    }
  });
};
