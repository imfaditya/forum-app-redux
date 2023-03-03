import React from 'react';
import ThreadItem from './ThreadItem';

function ThreadsList({ threads, users, authUser }) {
  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    threadsList.map((thread) => (
      <ThreadItem authUser={authUser} thread={thread} key={thread.id} />
    ))
  );
}

export default ThreadsList;
