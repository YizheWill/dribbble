import { serialize } from 'object-to-formdata';
export const BackendFetchShotComments = (shotId) => {
  const url = `/api/v1/shots/${shotId}/comments`;
  return fetch(url).then((res) => res.json());
};

export const BackendFetchUserComments = (userId) => {
  const url = `/api/v1/users/${userId}/comments`;
  return fetch(url).then((res) => res.json());
};

export const BackendCreateShotComment = (comment) => {
  const url = '/api/v1/comments';
  let formData = serialize({ comment });
  const fetchRequestOption = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return fetch(url, fetchRequestOption).then((res) => res.json());
};

export const BackendUpdateShotComment = (comment) => {
  const url = '/api/v1/comments/' + comment.id;
  let formData = serialize({ comment });
  const fetchRequestOption = {
    method: 'PATCH',
    header: {
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return fetch(url, fetchRequestOption).then((res) => res.json());
};
export const BackendDeleteShotComment = (commentId) => {
  const url = '/api/v1/comments/' + commentId;
  const fetchRequestOption = {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, fetchRequestOption).then((res) => res.json());
};
