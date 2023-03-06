import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import LeaderboardItem from './LeaderboardItem';

function LeaderboardsList() {
  const { leaderboards } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, []);

  if (leaderboards === null) {
    return null;
  }

  return (
    leaderboards.map((leaderboard) => (
      <LeaderboardItem key={leaderboard.user.id} leaderboard={leaderboard} />
    ))
  );
}

export default LeaderboardsList;
