export const BackendGetArtist = (id) => {
  const fetchRequestOption = {
    method: 'GET',
  };
  return fetch(`/api/v1/users/${id}`, fetchRequestOption).then((response) =>
    response.json()
  );
};
