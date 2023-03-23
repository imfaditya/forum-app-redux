/**
 * Test Scenario For Users Reducer
 *
 * - Users Reducer Function
 * - should return the users when given by RECEIVE_USERS
 * - should return the initial state when given by UNKNOW ACTION
*/

import usersReducer from './reducer';

describe('Users Reducer Function', () => {
  it('should return the users when given by RECEIVE_USERS', () => {
    // Arrange
    const initialUsers = [];

    const users = [
      {
        id: 'john_doe',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
      {
        id: 'jane_doe',
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
      {
        id: 'fulan',
        name: 'Si Fulan',
        email: 'fulan@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
    ];

    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users,
      },
    };

    // Action
    const newState = usersReducer(initialUsers, action);

    // Assert
    expect(newState).toEqual(users);
  });

  it('should return the initial state when given by UNKNOW ACTION', () => {
    // Arrange
    const users = [];

    const action = {
      type: 'UNKNOW',
    };

    // Action
    const newState = usersReducer(users, action);

    // Assert
    expect(newState).toEqual(users);
  });
});
