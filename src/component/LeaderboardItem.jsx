import React from 'react';

function LeaderboardItem({ leaderboard }) {
  return (
    <div className="leaderboard-content">
      <div className="identity">
        <img src={leaderboard.user.avatar} alt="avatar" />
        <p>{leaderboard.user.name}</p>
      </div>
      <p>{leaderboard.score}</p>
    </div>
  );
}

export default LeaderboardItem;
