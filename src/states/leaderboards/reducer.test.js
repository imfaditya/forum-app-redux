/**
 * Test Scenario For Leaderboards Reducer
 *
 * - Leaderboards Reducer Function
 * - should return the leaderboards when given by RECEIVE_LEADERBOARDS
 * - should return the initial state when given by UNKNOW ACTION
*/

import leaderboardsReducer from './reducer';

describe('Leaderboards Reducer Function', () => {
  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS', () => {
    // Arrange
    const initialLeaderboards = [];

    const leaderboards = [
      {
        user: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 10,
      },
      {
        user: {
          id: 'users-2',
          name: 'Jane Doe',
          email: 'jane@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 5,
      },
    ];

    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards,
      },
    };

    // Action
    const newState = leaderboardsReducer(initialLeaderboards, action);

    // Assert
    expect(newState).toEqual(leaderboards);
  });

  it('should return the initial state when given by UNKNOW ACTION', () => {
    // Arrange
    const leaderboards = [];

    const action = {
      type: 'UNKNOWN',
    };

    // Assert
    const newState = leaderboardsReducer(leaderboards, action);

    // Action
    expect(newState).toEqual(leaderboards);
  });
});
