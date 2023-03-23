import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentForm from '../component/CommentForm';
import CommentsList from '../component/CommentsList';
import ThreadDetail from '../component/ThreadDetail';
import { asyncaddComment, asyncReceiveDetailThread } from '../states/detailThread/action';

function DetailPage() {
  const { detailThread, authUser } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [dispatch]);

  if (detailThread === null) {
    return null;
  }

  const onCommentSubmit = ({ comment }) => {
    dispatch(asyncaddComment(detailThread.id, comment));
  };

  return (
    <>
      <ThreadDetail detailThread={detailThread} authUser={authUser} />
      <h3 className="comment-title">
        Comments
        (
        {detailThread.comments.length}
        )
      </h3>
      <CommentForm onCommentSubmit={onCommentSubmit} />
      <CommentsList
        comments={detailThread.comments}
        threadId={detailThread.id}
        authUser={authUser}
      />
    </>
  );
}

export default DetailPage;
