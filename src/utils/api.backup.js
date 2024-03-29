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

const getThreads = async () => {
  const response = await fetch(`${BASE_URL}/threads`, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.threads;
};

const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.users;
};

const getDetailThread = async (threadId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}`, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.detailThread;
};

const upVoteThread = async (threadId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}/up-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }
};

const downVoteThread = async (threadId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}/down-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }
};

const unVoteThread = async (threadId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }
};

const upVoteComment = async (threadId, commentId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }
};

const downVoteComment = async (threadId, commentId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }
};

const unVoteComment = async (threadId, commentId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }
};

const addComment = async (threadId, content) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.comment;
};

const addThread = async (thread) => {
  const response = await fetch(`${BASE_URL}/threads`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: thread.title,
      body: thread.content,
      category: thread.category,
    }),
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.thread;
};

const register = async (account) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: account.name,
      email: account.email,
      password: account.password,
    }),
  });

  const responseJSON = await response.json();
  const { status, message } = responseJSON;
  return { status, message };
};

const getLeaderboards = async () => {
  const response = await fetch(`${BASE_URL}/leaderboards`, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  if (responseJSON.status !== 'success') {
    throw new Error(responseJSON.message);
  }

  return responseJSON.data.leaderboards;
};

export {
  login,
  putAccessToken,
  getAccessToken,
  getAuthUserProfile,
  getThreads,
  getUsers,
  getDetailThread,
  upVoteThread,
  downVoteThread,
  unVoteThread,
  upVoteComment,
  downVoteComment,
  unVoteComment,
  addComment,
  addThread,
  register,
  getLeaderboards,
};
