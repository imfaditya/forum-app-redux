/**
 * Test Scenario Set Auth User Thunk
 *
 * - asyncSetAuthUser Function
 * - should dispatch action correctly when data fetchin success
 * - should dispatch action and call alert correctly when data fetching failed
 *
*/

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncSetAuthUser, setAuthUserActionCreator } from './action';

const fakeAuthUserResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    api._getAuthUserProfile = api.getAuthUserProfile;
    api._login = api.login;
  });

  afterEach(() => {
    api.getAuthUserProfile = api._getAuthUserProfile;
    api.login = api._login;

    delete api._login;
    delete api._getAuthUserProfile;
  });

  it('should dispatch action correctly when data fetchin success', async () => {
    // Arrange
    const email = 'tes@123.com';
    const password = '123456';
    api.login = () => Promise.resolve();
    api.getAuthUserProfile = () => Promise.resolve(fakeAuthUserResponse);

    const dispatch = jest.fn();

    // Action
    await asyncSetAuthUser({ email, password })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // Arrange
    const email = 'tes@123.com';
    const password = '123456';
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getAuthUserProfile = () => Promise.reject(fakeErrorResponse);
    const dispatch = jest.fn();
    window.alert = jest.fn();

    // Action
    await asyncSetAuthUser({ email, password })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
