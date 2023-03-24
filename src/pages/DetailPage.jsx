import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import { asyncaddComment, asyncReceiveDetailThread } from '../states/detailThread/action';

const CommentForm = loadable(() => import('../component/CommentForm'));
const CommentsList = loadable(() => import('../component/CommentsList'));
const ThreadDetail = loadable(() => import('../component/ThreadDetail'));

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
