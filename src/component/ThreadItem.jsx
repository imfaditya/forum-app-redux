import parse from 'html-react-parser';
import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpOffAlt, MdThumbDownOffAlt, MdThumbUp, MdThumbDown,
} from 'react-icons/md';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncDownVoteThread, asyncUnVoteThread, asyncUpVoteThread } from '../states/threads/action';
import timeDiffFormatter from '../utils/timediffFormatter';

function ThreadItem({ thread, authUser }) {
  const isUpVoted = thread.upVotesBy.includes(authUser.id);
  const isDownVoted = thread.downVotesBy.includes(authUser.id);
  const dispatch = useDispatch();

  const onUpVoteThread = (event) => {
    event.stopPropagation();
    dispatch(asyncUpVoteThread(authUser.id, thread.id));
  };

  const onDownVoteThread = (event) => {
    event.stopPropagation();
    dispatch(asyncDownVoteThread(authUser.id, thread.id));
  };

  const onUnvoteThread = (event) => {
    event.stopPropagation();
    dispatch(asyncUnVoteThread(authUser.id, thread.id));
  };

  return (
    <article className="thread-item">
      <span>
        <b>
          #
          {thread.category}
        </b>
      </span>
      <Link to={`threads/${thread.id}`}>
        <h3>{thread.title}</h3>
      </Link>

      <div className="line-clamp">
        {parse(`${thread.body}`)}
      </div>

      <section className="thread-footer">
        <section className="thread-action">
          {isUpVoted ? (
            <button type="button" onClick={onUnvoteThread}>
              <MdThumbUp />
            </button>
          )
            : (
              <button type="button" onClick={onUpVoteThread}>
                <MdThumbUpOffAlt />
              </button>
            )}
          <p>{thread.upVotesBy.length}</p>

          {isDownVoted ? (
            <button type="button" onClick={onUnvoteThread}>
              <MdThumbDown />
            </button>
          ) : (
            <button type="button" onClick={onDownVoteThread}>
              <MdThumbDownOffAlt />
            </button>
          )}
          <p>{thread.downVotesBy.length}</p>
          <Link to={`threads/${thread.id}`}>
            <FaRegCommentAlt />
          </Link>
          <p>{thread.totalComments}</p>
        </section>
        <p>{timeDiffFormatter(thread.createdAt)}</p>
        <p>
          Created by
          {' '}
          <b>{thread.user.name}</b>
        </p>
      </section>
    </article>
  );
}

ThreadItem.propTypes = {
  thread: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
};

export default ThreadItem;
