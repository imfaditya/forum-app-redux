/**
 * Test Scenario Comment Form
 *
 * - CommentForm Component
 * - should handle comment change
 * - should call onCommentSubmit when submit button is clicked
 *
 */

import React from 'react';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentForm from './CommentForm';

describe('CommentForm Component', () => {
  it('should handle comment change', async () => {
    // Arrange
    await act(async () => render(<CommentForm onCommentSubmit={() => {}} />));
    const commentInput = screen.getByTestId('comment');

    // Action
    await act(async () => userEvent.click(commentInput));
    await act(async () => userEvent.keyboard('comment'));

    // Assert
    expect(commentInput.textContent).toBe('comment');
  });

  it('should call onCommentSubmit when submit button is clicked', async () => {
    // Arrange
    const mockOnCommentSubmit = jest.fn();
    await act(async () => render(<CommentForm onCommentSubmit={mockOnCommentSubmit} />));
    const commentInput = screen.getByTestId('comment');
    const submitButton = screen.getByRole('button');

    // Action
    await act(async () => userEvent.click(commentInput));
    await act(async () => userEvent.keyboard('comment'));
    await act(async () => userEvent.click(submitButton));

    // Assert
    expect(mockOnCommentSubmit).toBeCalledWith({ comment: 'comment' });
  });
});
