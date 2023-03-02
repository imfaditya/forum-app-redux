/* eslint-disable max-len */
import React from 'react';
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ThreadItem() {
  return (
    <article className="thread-item">
      <Link to="/detail">
        <h3>
          React Menyenangkan
          {' '}

        </h3>
      </Link>
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
        <p>
          by
          {' '}
          <b>Imam</b>
        </p>
      </section>
    </article>
  );
}

export default ThreadItem;
