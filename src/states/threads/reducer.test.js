/**
 * Test Scenario For Threads Reducer
 *
 * - Threads Reducer Function
 * - should return the threads with the new thread when given by ADD_THREAD
 * - should return the threads when given by RECEIVE_THREADS
 * - should return the threads with up voted thread when given by UP_VOTE_THREAD
 * - should return the threads with down voted thread when given by DOWN_VOTE_THREAD
 * - should return the initial state when given by UNKNOWN ACTION
 *
*/

import threadsReducer from './reducer';

describe('Threads Reducer Function', () => {
  it('should return the threads with the new thread when given by ADD_THREAD', () => {
    // Arrange
    const threads = [
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

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // Action
    const newState = threadsReducer(threads, action);

    // Assert
    expect(newState).toEqual([action.payload.thread, ...threads]);
  });

  it('should return the threads when given by RECEIVE_THREADS', () => {
    // Arrange
    const initialThreads = [];

    const threads = [
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
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads,
      },
    };

    // Action
    const newState = threadsReducer(initialThreads, action);

    // Assert
    expect(newState).toEqual(threads);
  });

  it('should return the threads with up voted thread when given by UP_VOTE_THREAD', () => {
    // Arrange
    const threads = [
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

    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        userId: 'users-2',
        threadId: 'thread-1',
      },
    };

    // Action
    const newState = threadsReducer(threads, action);

    // Assert
    expect(newState).toEqual([
      {
        ...threads[0],
        upVotesBy: ['users-2'],
      },
    ]);
  });

  it('should return the threads with down voted thread when given by DOWN_VOTE_THREAD', () => {
    // Arrange
    const threads = [
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

    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        userId: 'users-2',
        threadId: 'thread-1',
      },
    };

    // Action
    const newState = threadsReducer(threads, action);

    // Assert
    expect(newState).toEqual([
      {
        ...threads[0],
        downVotesBy: ['users-2'],
      },
    ]);
  });

  it('should return the threads with un voted thread when given by UNVOTE_THREAD', () => {
    // Arrange
    const threads = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['users-2'],
        downVotesBy: ['users-3'],
        totalComments: 0,
      },
    ];

    const action = (userId) => ({
      type: 'UNVOTE_THREAD',
      payload: {
        userId,
        threadId: 'thread-1',
      },
    });

    // Action : Unvote Up Vote
    let newState = threadsReducer(threads, action('users-2'));

    // Assert
    expect(newState).toEqual([
      {
        ...threads[0],
        upVotesBy: [],
      },
    ]);

    // Action : Unvote Down Vote
    newState = threadsReducer(threads, action('users-3'));

    // Assert
    expect(newState).toEqual([
      {
        ...threads[0],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the initial state when given by UNKNOWN ACTION', () => {
    // Arrange
    const threads = [];

    const action = {
      type: 'UNKNOWN',
    };

    // Action
    const newState = threadsReducer(threads, action);

    // Assert
    expect(newState).toEqual(threads);
  });
});
