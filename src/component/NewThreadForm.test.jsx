/**
 * Test Scenario New Thread Form
 *
 * - NewThreadForm Component
 * - should handle title change
 * - should handle category change
 * - should handle content change
 * - should call onThreadSubmit when submit button is clicked
*/

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NewThreadForm from './NewThreadForm';
import '@testing-library/jest-dom';

describe('NewThreadForm Component', () => {
  it('should handle title change', async () => {
    // Arrange
    await act(async () => render(<NewThreadForm onThreadSubmit={() => {}} />));
    const titleInput = screen.getByPlaceholderText('Title...');

    // Action
    await act(async () => userEvent.type(titleInput, 'title'));

    // Assert
    expect(titleInput).toHaveValue('title');
  });

  it('should handle category change', async () => {
    // Arrange
    await act(async () => render(<NewThreadForm onThreadSubmit={() => {}} />));
    const categoryInput = screen.getByPlaceholderText('Category...');

    // Action
    await act(async () => userEvent.type(categoryInput, 'category'));

    // Assert
    expect(categoryInput).toHaveValue('category');
  });

  it('should handle content change', async () => {
    // Arrange
    await act(async () => render(<NewThreadForm onThreadSubmit={() => {}} />));
    const contentInput = screen.getByTestId('content');

    // Action
    await act(async () => userEvent.click(contentInput));
    await act(async () => userEvent.keyboard('content'));

    // Assert
    expect(contentInput.textContent).toBe('content');
  });

  it('should call onThreadSubmit when submit button is clicked', async () => {
    // Arrange
    const mockOnThreadSubmit = jest.fn();
    await act(async () => render(<NewThreadForm onThreadSubmit={mockOnThreadSubmit} />));
    const titleInput = screen.getByPlaceholderText('Title...');
    const categoryInput = screen.getByPlaceholderText('Category...');
    const contentInput = screen.getByTestId('content');
    const submitButton = screen.getByRole('button');

    // Action
    await act(async () => userEvent.type(titleInput, 'title'));
    await act(async () => userEvent.type(categoryInput, 'category'));
    await act(async () => userEvent.click(contentInput));
    await act(async () => userEvent.keyboard('content'));
    await act(async () => userEvent.click(submitButton));

    // Assert
    expect(mockOnThreadSubmit).toBeCalledWith({
      title: 'title',
      category: 'category',
      content: 'content',
    });
  });
});
