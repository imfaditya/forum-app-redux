/**
 * Test Scenario Receive Threads Users Categories Thunk
 *
 * - asyncReceiveThreadsUsersCategories Function
 * - should dispatch action correctly when data fetchin success
 * - should dispatch action and call alert correctly when data fetching failed
 *
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveCategoriesActionCreator } from '../categories/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import asyncReceiveThreadsUsersCategories from './action';

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeCategories = [
  ...new Set(fakeThreadsResponse.map((thread) => thread.category)),
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveThreadsUsersCategories thunk', () => {
  beforeEach(() => {
    api._getThreads = api.getThreads;
    api._getUsers = api.getUsers;
  });

  afterEach(() => {
    api.getThreads = api._getThreads;
    api.getUsers = api._getUsers;

    delete api._getThreads;
    delete api._getUsers;
  });

  it('should dispatch action correctly when data fetchin success', async () => {
    // Arrange
    api.getThreads = () => Promise.resolve(fakeThreadsResponse);
    api.getUsers = () => Promise.resolve(fakeUsersResponse);
    const dispatch = jest.fn();

    // Action
    await asyncReceiveThreadsUsersCategories()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveCategoriesActionCreator(fakeCategories));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // Arrange
    api.getThreads = () => Promise.reject(fakeErrorResponse);
    api.getUsers = () => Promise.resolve(fakeErrorResponse);
    const dispatch = jest.fn();
    window.alert = jest.fn();

    // Action
    await asyncReceiveThreadsUsersCategories()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
