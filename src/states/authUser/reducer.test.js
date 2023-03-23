/**
 * Test Scenario Auth User Reducer
 *
 * - Auth User Reducer Function
 * - should return the auth user when given by SET_AUTH_USER
 * - should return null when given by UNSET_AUTH_USER
 * - should return initial state when given by UNKNOW ACTION
*/

import authUserReducer from './reducer';

describe('Auth User Reducer Function', () => {
  it('should return the auth user when given by SET_AUTH_USER', () => {
    // Arrange
    const initialAuthUser = [];
    const authUser = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };

    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser,
      },
    };

    // Action
    const newState = authUserReducer(initialAuthUser, action);

    // Assert
    expect(newState).toEqual(authUser);
  });

  it('should return null when given by UNSET_AUTH_USER', () => {
    // Arrange
    const authUser = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };

    const action = {
      type: 'UNSET_AUTH_USER',
    };

    // Action
    const newState = authUserReducer(authUser, action);

    // Assert
    expect(newState).toEqual(null);
  });

  it('should return initial state when given by UNKNOW ACTION', () => {
    // Arrange
    const authUser = null;

    const action = {
      type: 'UNKNOWN',
    };

    // Action
    const newState = authUserReducer(authUser, action);

    // Assert
    expect(newState).toEqual(null);
  });
});
