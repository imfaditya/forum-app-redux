import React from 'react';
import CommentForm from '../component/CommentForm';
import CommentsList from '../component/CommentsList';
import ThreadDetail from '../component/ThreadDetail';

function DetailPage() {
  return (
    <>
      <ThreadDetail />
      <h3 className="comment-title">Comments</h3>
      <CommentForm />
      <CommentsList />
    </>
  );
}

export default DetailPage;
