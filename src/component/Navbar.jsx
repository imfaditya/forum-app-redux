/* eslint-disable react/require-default-props */
import React from 'react';
import {
  IoChatboxEllipsesOutline, IoPodiumOutline, IoLogOutOutline,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';
import { unsetAuthUserActionCreator } from '../states/authUser/action';
import api from '../utils/api';

function Navbar({ authUser }) {
  const dispatch = useDispatch();

  if (!authUser) {
    return null;
  }

  const logout = () => {
    dispatch(unsetAuthUserActionCreator());
    api.clearAccessToken();
  };

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
        <button title="Log Out" type="button" onClick={logout}>
          <IoLogOutOutline />
        </button>
      </section>
    </nav>
  );
}

Navbar.propTypes = {
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default Navbar;
