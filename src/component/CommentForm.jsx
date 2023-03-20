import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { asyncaddComment } from '../states/detailThread/action';

function CommentForm({ threadId }) {
  const [comment, setComment] = React.useState('');
  const dispatch = useDispatch();

  const onCommentChange = (event) => {
    setComment(event.target.innerHTML);
  };

  const onCommentSubmit = (event) => {
    event.preventDefault();
    dispatch(asyncaddComment(threadId, comment));
  };

  return (
    <form className="comment-form" onSubmit={onCommentSubmit}>
      <div className="div-editable" contentEditable="true" onInput={onCommentChange} />
      <button type="submit">Post Comment</button>
    </form>
  );
}

CommentForm.propTypes = {
  threadId: PropTypes.string.isRequired,
};

export default CommentForm;
