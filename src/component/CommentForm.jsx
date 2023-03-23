import React from 'react';
import PropTypes from 'prop-types';

function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = React.useState('');

  const onCommentChange = (event) => {
    setComment(event.target.innerHTML);
  };

  return (
    <form className="comment-form">
      <div className="div-editable" data-testid="comment" contentEditable="true" onInput={onCommentChange} />
      <button type="button" onClick={() => onCommentSubmit(comment)}>Post Comment</button>
    </form>
  );
}

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

export default CommentForm;
