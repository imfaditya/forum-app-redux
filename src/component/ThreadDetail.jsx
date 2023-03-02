/* eslint-disable max-len */
import React from 'react';
import { MdThumbDownOffAlt, MdThumbUpOffAlt } from 'react-icons/md';

function ThreadDetail() {
  return (
    <article className="thread-item">
      <h2>
        React Menyenangkan
        {' '}

      </h2>
      <span><b>#React</b></span>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit similique nostrum rem suscipit soluta consectetur, quisquam possimus, amet est molestiae perspiciatis veritatis ipsa non in natus asperiores delectus reprehenderit.
        Laborum, minus id. Veritatis reiciendis cumque ut fugiat accusantium. Numquam est voluptates illum aliquam rem. Aliquid eveniet ad soluta recusandae fugiat, provident blanditiis. Hic perspiciatis eveniet deleniti dolorem numquam vitae.
      </p>

      <section className="thread-footer">
        <section className="thread-action">
          <MdThumbUpOffAlt />
          <MdThumbDownOffAlt />
        </section>
        <p>23 Minutes Ago</p>
        <img className="avatar" src="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random" alt="avatar" />
        <p>
          by
          {' '}
          <b>Imam</b>
        </p>
      </section>
    </article>
  );
}

export default ThreadDetail;
