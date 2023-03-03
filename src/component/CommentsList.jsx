import React from 'react';
import CommentItem from './CommentItem';

function CommentsList({ comments, authUser, threadId }) {
  return (
    comments.map((comment) => (
      <CommentItem
        key={comment.id}
        comment={comment}
        authUser={authUser}
        threadId={threadId}
      />
    ))
  );
}

export default CommentsList;
