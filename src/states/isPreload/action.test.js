/**
 * Test Scenario Set Preload
 *
 * - asyncSetPreload Function
 * - should dispatch action correctly when data fetching success
 * - should dispatch action correctly when data fetching failed
 *
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';
import { asyncSetPreload, setPreloadActionCreator } from './action';

const fakeAuthUserResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncSetPreload thunk', () => {
  beforeEach(() => {
    api._getAuthUserProfile = api.getAuthUserProfile;
  });

  afterEach(() => {
    api.getAuthUserProfile = api._getAuthUserProfile;

    delete api._getAuthUserProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    api.getAuthUserProfile = () => Promise.resolve(fakeAuthUserResponse);

    const dispatch = jest.fn();

    // Action
    await asyncSetPreload()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false));
    expect(dispatch).toHaveBeenLastCalledWith(hideLoading());
  });

  it('should dispatch action correctly when data fetching failed', async () => {
    // Arrange
    api.getAuthUserProfile = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    // Action
    await asyncSetPreload()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setPreloadActionCreator(false));
    expect(dispatch).toHaveBeenLastCalledWith(hideLoading());
  });
});
