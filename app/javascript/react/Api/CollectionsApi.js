export const BackendFetchUserCollections = (userId) => {
  const url = `/api/v1/users/${userId}/collections`;
  return fetch(url).then((res) => {
    // console.log('collection api', res);
    return res.json();
  });
};

export const BackendFetchCollection = (collectionId) => {
  const url = `/api/v1/collections/${collectionId}`;
  return fetch(url).then((res) => {
    // console.log('get a single collection', res);
    return res.json();
  });
};
