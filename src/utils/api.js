const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function putAccessToken(token) {
    localStorage.setItem('auth_token', token);
  }

  function getAccessToken() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('auth_token');
      resolve(token);
    });
  }

  function clearAccessToken() {
    localStorage.removeItem('auth_token');
  }

  async function login({ email, password }) {
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
      alert('login');
      throw new Error(responseJSON.message);
    }

    return responseJSON.data.token;
  }

  async function getAuthUserProfile() {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }

    return responseJSON.data.user;
  }

  async function getThreads() {
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'GET',
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }

    return responseJSON.data.threads;
  }

  async function getUsers() {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }

    return responseJSON.data.users;
  }

  async function getDetailThread(threadId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}`, {
      method: 'GET',
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }

    return responseJSON.data.detailThread;
  }

  async function upVoteThread(threadId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/up-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }
  }

  async function downVoteThread(threadId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/down-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }
  }

  async function unVoteThread(threadId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }
  }

  async function upVoteComment(threadId, commentId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }
  }

  async function downVoteComment(threadId, commentId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }
  }

  async function unVoteComment(threadId, commentId) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }
  }

  async function addComment(threadId, content) {
    const response = await fetch(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
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
  }

  async function addThread(thread) {
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
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
  }

  async function register(account) {
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
  }

  async function getLeaderboards() {
    const response = await fetch(`${BASE_URL}/leaderboards`, {
      method: 'GET',
    });

    const responseJSON = await response.json();
    if (responseJSON.status !== 'success') {
      throw new Error(responseJSON.message);
    }

    return responseJSON.data.leaderboards;
  }

  return {
    putAccessToken,
    getAccessToken,
    login,
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
    clearAccessToken,
  };
})();

export default api;
