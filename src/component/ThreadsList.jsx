import React from 'react';
import PropTypes from 'prop-types';
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

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ThreadsList;
