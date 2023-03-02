const BASE_URL = 'https://forum-api.dicoding.dev/v1';

const putAccessToken = (token) => {
  localStorage.setItem('auth_token', token);
};

const getAccessToken = () => localStorage.getItem('auth_token');

const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const responseJSON = await response.json();

  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.token;
};

const getAuthUserProfile = async () => {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.user;
};

export {
  login,
  putAccessToken,
  getAccessToken,
  getAuthUserProfile,
};
