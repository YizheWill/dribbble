export const isSignedIn = () => {
  return window.localStorage.getItem('sessionToken');
};

export const signIn = (sessionToken) => {
  window.localStorage.setItem('sessionToken', sessionToken);
};

export const signOut = () => {
  window.localStorage.removeItem('sessionToken');
};
