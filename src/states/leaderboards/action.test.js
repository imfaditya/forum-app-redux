/**
 * Test Scenario Receive Leaderboards
 *
 * - receiveLeaderboardsActionCreator Function
 * - should dispatch action correctly when data fetchin success
 * - should dispatch action and call alert correctly when data fetching failed
 *
*/

import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { asyncReceiveLeaderboards, receiveLeaderboardsActionCreator } from "./action";

const fakeLeaderboardsResponse = [
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

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards;

    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when data fetchin success', async () => {
    // Arrange
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    const dispatch = jest.fn();

    // Action
    await asyncReceiveLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
