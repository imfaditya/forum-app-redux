import React from 'react';
import {
  IoChatboxEllipsesOutline, IoPodiumOutline, IoLogInOutline, IoLogOutOutline,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { unsetAuthUserActionCreator } from '../states/authUser/action';

function Navbar() {
  const authUser = useSelector((states) => states.authUser);
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="disquite" />
      </Link>
      <section>
        <button type="button">
          <IoChatboxEllipsesOutline />
        </button>
        <button type="button">
          <IoPodiumOutline />
        </button>
        <button type="button" onClick={() => dispatch(unsetAuthUserActionCreator())}>
          {authUser ? <IoLogOutOutline /> : <IoLogInOutline />}
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
