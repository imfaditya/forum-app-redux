import React from 'react';

function CommentForm() {
  return (
    <form className="comment-form">
      <textarea placeholder="Comment..." />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default CommentForm;
