export const BackendSignUpUser = ({ name, username, email, password }) => {
  const fetchRequestOption = {
    method: 'POST',
    body: JSON.stringify({ name, username, email, password }),
  };
  return fetch('/api/v1/users', fetchRequestOption).then((response) => response.json());
};

export const BackendSignInUser = ({ username, email, password }) => {
  const fetchRequestOption = {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
  };
  return fetch('/api/v1/session', fetchRequestOption).then((response) => response.json());
};

export const BackendGetUserInfo = (id) => {
  console.log('id', id);
  const fetchRequestOption = {
    method: 'GET',
  };
  return fetch(`/api/v1/users/${id}`, fetchRequestOption).then((response) =>
    response.json()
  );
};
