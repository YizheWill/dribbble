import { serialize } from 'object-to-formdata';
export const BackendSignUpUser = ({ name, username, email, password }) => {
  const fetchRequestOption = {
    method: 'POST',
    body: JSON.stringify({ name, username, email, password }),
  };
  return fetch('/api/v1/users', fetchRequestOption).then((response) => response.json());
};

export const BackendSignInUser = (user) => {
  console.log('user', user);
  // const csrfToken = document.querySelector("[name='csrf-token']").content;
  let formData = serialize({ user });
  const fetchRequestOption = {
    method: 'POST',
    header: {
      // 'X-CSRF_Token': csrfToken,
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  console.log('fetchbody', fetchRequestOption.body);
  return fetch('/api/v1/session', fetchRequestOption).then((response) => response.json());
};

export const BackendGetCurrentUserInfo = (sessionToken) => {
  let formData = serialize({
    user: {
      username: 'username',
      password: 'password',
      email: 'emailaddress',
      session_token: sessionToken,
    },
  });
  const fetchRequestOption = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: formData,
  };
  return fetch('/api/v1/session', fetchRequestOption).then((response) => response.json());
};

export const BackendGetUserInfo = (id) => {
  const fetchRequestOption = {
    method: 'GET',
  };
  return fetch(`/api/v1/users/${id}`, fetchRequestOption).then((response) =>
    response.json()
  );
};
