/* eslint-disable max-len */
import React from 'react';
import { MdThumbDownOffAlt, MdThumbUpOffAlt } from 'react-icons/md';

function CommentItem() {
  return (
    <section className="comment-item">
      <div className="comment-identity">
        <img src="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random" alt="avatar" />
        <p>Imam Faraz Aditya</p>
      </div>
      <p className="comment-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus voluptate aliquam illum enim animi? Minus quam placeat explicabo temporibus repudiandae harum quod necessitatibus aliquid. Aut necessitatibus nulla explicabo repellat.</p>
      <div className="comment-footer">
        <MdThumbUpOffAlt />
        <MdThumbDownOffAlt />
        <p>2 Minutes Ago</p>
      </div>
    </section>
  );
}

export default CommentItem;
