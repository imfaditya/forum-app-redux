/**
 * Test Scenario Register Form
 *
 * - RegisterForm Component
 * - should handle email change
 * - should handle password change
 * - should handle name change
 * - should call register when register button is clicked
 */

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import RegisterForm from './RegisterForm';
import '@testing-library/jest-dom';

describe('RegisterForm Component', () => {
  it('should handle email change', async () => {
    // Arrange
    await act(async () => render(<RegisterForm onRegister={() => {}} />));
    const emailInput = screen.getByPlaceholderText('Email');
    // Action
    await act(async () => userEvent.type(emailInput, 'email@test.com'));

    // Assert
    expect(emailInput).toHaveValue('email@test.com');
  });

  it('should handle password change', async () => {
    // Arrange
    await act(async () => render(<RegisterForm onRegister={() => {}} />));
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    await act(async () => userEvent.type(passwordInput, 'password'));

    // Assert
    expect(passwordInput).toHaveValue('password');
  });

  it('should handle name change', async () => {
    // Arrange
    await act(async () => render(<RegisterForm onRegister={() => {}} />));
    const nameInput = screen.getByPlaceholderText('Name');

    // Action
    await act(async () => userEvent.type(nameInput, 'name'));

    // Assert
    expect(nameInput).toHaveValue('name');
  });

  it('should call register when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    await act(async () => render(<RegisterForm onRegister={mockRegister} />));
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const nameInput = screen.getByPlaceholderText('Name');
    const registerButton = screen.getByRole('button', { name: 'Register' });

    // Action
    await act(async () => userEvent.type(emailInput, 'email@test.com'));
    await act(async () => userEvent.type(passwordInput, 'password'));
    await act(async () => userEvent.type(nameInput, 'name'));
    await act(async () => userEvent.click(registerButton));

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'name',
      email: 'email@test.com',
      password: 'password',
    });
  });
});
