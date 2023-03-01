import React from 'react';
import PopularCategory from '../component/PopularCategory';
import ThreadsList from '../component/ThreadsList';

function HomePage() {
  return (
    <>
      <PopularCategory />
      <ThreadsList />
    </>
  );
}

export default HomePage;
