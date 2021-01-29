import { serialize } from 'object-to-formdata';

export const BackendFetchAllShots = (pageNumber) => {
  const url = `/api/v1/shots`;
  return fetch(url).then((res) => {
    // console.log(res);
    return res.json();
  });
};

export const BackendFetchShot = (shotId) => {
  const url = `/api/v1/shots/${shotId}`;
  return fetch(url).then((res) => res.json());
};

export const BackendDeleteShot = (shotId) => {
  const url = `/api/v1/shots/${shotId}`;
  return fetch(url, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export const BackendEditShot = ({ shot }) => {
  const url = `/api/v1/shots/${shot.id}`;
  let formData = serialize({ shot: shot });
  const fetchRequestOption = {
    method: 'PATCH',
    header: {
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return fetch(url, fetchRequestOption).then((res) => res.json());
};

export const BackendCreateShot = (shot) => {
  const url = '/api/v1/shots';
  let formData = serialize(shot);
  const fetchRequestOption = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return fetch(url, fetchRequestOption).then((res) => res.json());
};

export const BackendFetchKeywordShots = (keyword) => {
  const url = `/api/v1/shots?key_word=${keyword}`;
  const fetchRequestOption = {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, fetchRequestOption).then((res) => res.json());
};
