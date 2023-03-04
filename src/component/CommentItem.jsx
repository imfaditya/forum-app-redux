/* eslint-disable max-len */
import React from 'react';
import {
  MdThumbDown, MdThumbDownOffAlt, MdThumbUp, MdThumbUpOffAlt,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { asyncDownVoteComment, asyncUnVoteComment, asyncUpVoteComment } from '../states/detailThread/action';
import timeDiffFormatter from '../utils/timediffFormatter';

function CommentItem({ comment, authUser, threadId }) {
  const dispatch = useDispatch();
  const isUpVoted = comment.upVotesBy.includes(authUser.id);
  const isDownVoted = comment.downVotesBy.includes(authUser.id);

  const onUpVoteComment = (event) => {
    event.stopPropagation();
    dispatch(asyncUpVoteComment(authUser.id, threadId, comment.id));
  };

  const onDownVoteComment = (event) => {
    event.stopPropagation();
    dispatch(asyncDownVoteComment(authUser.id, threadId, comment.id));
  };

  const onUnvoteComment = (event) => {
    event.stopPropagation();
    dispatch(asyncUnVoteComment(authUser.id, threadId, comment.id));
  };

  return (
    <section className="comment-item">
      <div className="comment-identity">
        <img src={comment.owner.avatar} alt="avatar" />
        <p>{comment.owner.name}</p>
      </div>
      <div className="comment-content">{parse(`${comment.content}`)}</div>
      <div className="comment-footer">
        <div className="comment-action">
          {isUpVoted ? (
            <button type="button" onClick={onUnvoteComment}>
              <MdThumbUp />
            </button>
          )
            : (
              <button type="button" onClick={onUpVoteComment}>
                <MdThumbUpOffAlt />
              </button>
            )}
          <p>{comment.upVotesBy.length}</p>
          {isDownVoted ? (
            <button type="button" onClick={onUnvoteComment}>
              <MdThumbDown />
            </button>
          ) : (
            <button type="button" onClick={onDownVoteComment}>
              <MdThumbDownOffAlt />
            </button>
          )}
          <p>{comment.downVotesBy.length}</p>
        </div>
        <p>{timeDiffFormatter(comment.createdAt)}</p>
      </div>
    </section>
  );
}

export default CommentItem;
