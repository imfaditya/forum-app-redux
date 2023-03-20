import React from 'react';
import PropTypes from 'prop-types';

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

LeaderboardItem.propTypes = {
  leaderboard: PropTypes.object.isRequired,
};

export default LeaderboardItem;
