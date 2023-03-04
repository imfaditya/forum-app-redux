import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PopularCategory from '../component/PopularCategory';
import ThreadsList from '../component/ThreadsList';
import asyncReceiveThreadsAndUsers from '../states/shared/action';

function HomePage() {
  const { threads, users, authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveThreadsAndUsers());
  }, [dispatch]);

  return (
    <>
      <PopularCategory />
      <Link to="/add" className="new-thread-button">
        Create New Thread
      </Link>
      <ThreadsList threads={threads} users={users} authUser={authUser} />
    </>
  );
}

export default HomePage;
