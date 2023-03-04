/* eslint-disable max-len */
import React from 'react';
import parse from 'html-react-parser';
import {
  MdThumbDown, MdThumbDownOffAlt, MdThumbUp, MdThumbUpOffAlt,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import timeDiffFormatter from '../utils/timediffFormatter';
import { asyncDownVoteDetailThread, asyncUnVoteDetailThread, asyncUpVoteDetailThread } from '../states/detailThread/action';

function ThreadDetail({ detailThread, authUser }) {
  const isUpVoted = detailThread.upVotesBy.includes(authUser.id);
  const isDownVoted = detailThread.downVotesBy.includes(authUser.id);
  const dispatch = useDispatch();

  const onUpVoteDetailThread = (event) => {
    event.stopPropagation();
    dispatch(asyncUpVoteDetailThread(authUser.id, detailThread.id));
  };

  const onDownVoteDetailThread = (event) => {
    event.stopPropagation();
    dispatch(asyncDownVoteDetailThread(authUser.id, detailThread.id));
  };

  const onUnvoteDetailThread = (event) => {
    event.stopPropagation();
    dispatch(asyncUnVoteDetailThread(authUser.id, detailThread.id));
  };

  if (detailThread === null) {
    return null;
  }

  return (
    <article className="thread-item">
      <h2>
        <b>{detailThread.title}</b>
      </h2>
      <span>
        <b>
          #
          {detailThread.category}
        </b>
      </span>

      <div className="detail-body">
        {parse(`${detailThread.body}`)}
      </div>

      <section className="thread-footer">
        <section className="thread-action">
          {isUpVoted ? (
            <button type="button" onClick={onUnvoteDetailThread}>
              <MdThumbUp />
            </button>
          )
            : (
              <button type="button" onClick={onUpVoteDetailThread}>
                <MdThumbUpOffAlt />
              </button>
            )}
          <p>{detailThread.upVotesBy.length}</p>
          {isDownVoted ? (
            <button type="button" onClick={onUnvoteDetailThread}>
              <MdThumbDown />
            </button>
          ) : (
            <button type="button" onClick={onDownVoteDetailThread}>
              <MdThumbDownOffAlt />
            </button>
          )}
          <p>{detailThread.downVotesBy.length}</p>
        </section>
        <p>{timeDiffFormatter(detailThread.createdAt)}</p>
        <img className="avatar" src={detailThread.owner.avatar} alt="avatar" />
        <p>
          by
          {' '}
          <b>{detailThread.owner.name}</b>
        </p>
      </section>
    </article>
  );
}

export default ThreadDetail;
