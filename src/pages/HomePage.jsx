import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import loadable from '@loadable/component';
import asyncReceiveThreadsUsersCategories from '../states/shared/action';

const ThreadsList = loadable(() => import('../component/ThreadsList'));
const PopularCategory = loadable(() => import('../component/PopularCategory'));

function HomePage() {
  const {
    threads, users, authUser, categories,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveThreadsUsersCategories());
  }, [dispatch]);

  if (threads === null || users === null) {
    return null;
  }

  return (
    <>
      <h2><b>Popular Category</b></h2>
      <PopularCategory categories={categories} />
      <h2><b>Threads</b></h2>
      <Link to="/add" className="new-thread-button">
        Create New Thread
      </Link>
      <ThreadsList
        threads={categories.selectedCategory !== ''
          ? threads.filter((thread) => thread.category === categories.selectedCategory)
          : threads}
        users={users}
        authUser={authUser}
      />
    </>
  );
}

export default HomePage;
