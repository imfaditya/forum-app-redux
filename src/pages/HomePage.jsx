import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <ThreadsList threads={threads} users={users} authUser={authUser} />
    </>
  );
}

export default HomePage;
