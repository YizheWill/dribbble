export const BackendFetchUserCollections = (userId) => {
  const url = `/api/v1/users/${userId}/collections`;
  return fetch(url).then((res) => {
    console.log('collection api', res);
    return res.json();
  });
};
