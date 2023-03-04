import React from 'react';
import { useDispatch } from 'react-redux';
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
      <div className="div-editable" contentEditable="true" data-placeholder="Comment..." onInput={onCommentChange} />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default CommentForm;
