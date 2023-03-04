import React from 'react';
import {
  IoChatboxEllipsesOutline, IoPodiumOutline, IoLogOutOutline,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { unsetAuthUserActionCreator } from '../states/authUser/action';

function Navbar({ authUser }) {
  const dispatch = useDispatch();

  if (!authUser) {
    return null;
  }

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="disquite" />
      </Link>
      <section>
        <Link to="/" title="Home">
          <IoChatboxEllipsesOutline />
        </Link>
        <Link to="/leaderboards" type="button" title="Leaderboards">
          <IoPodiumOutline />
        </Link>
        <button title="Log Out" type="button" onClick={() => dispatch(unsetAuthUserActionCreator())}>
          <IoLogOutOutline />
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
