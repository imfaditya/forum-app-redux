import React from 'react';
import loadable from '@loadable/component';

const LeaderboardsList = loadable(() => import('../component/LeaderboardsList'));

function LeaderboardsPage() {
  return (
    <section className="leaderboards-card">
      <h2><b>Leaderboards</b></h2>
      <LeaderboardsList />
    </section>
  );
}

export default LeaderboardsPage;
