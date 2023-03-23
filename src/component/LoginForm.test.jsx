/**
 * Test Scneario Login Form
 *
 * - LoginForm Component
 * - should handle email change
 * - should handle password change
 * - should call login when login button is clicked
 */

import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom';

describe('LoginForm Component', () => {
  it('should handle email change', async () => {
    // Arrange
    await act(async () => render(<LoginForm login={() => {}} />));
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    await act(async () => userEvent.type(emailInput, 'email@test.com'));

    // Assert
    expect(emailInput).toHaveValue('email@test.com');
  });

  it('should handle password change', async () => {
    // Arrange
    await act(async () => render(<LoginForm login={() => {}} />));
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    await act(async () => userEvent.type(passwordInput, 'password'));

    // Assert
    expect(passwordInput).toHaveValue('password');
  });

  it('should call login when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    await act(async () => render(<LoginForm login={mockLogin} />));
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await act(async () => userEvent.type(emailInput, 'email@test.com'));
    await act(async () => userEvent.type(passwordInput, 'password'));

    // Action
    await act(async () => userEvent.click(loginButton));

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'email@test.com',
      password: 'password',
    });
  });
});
