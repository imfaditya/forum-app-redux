import React from 'react';
import { IoChatboxEllipsesOutline, IoPodiumOutline, IoLogInOutline } from 'react-icons/io5';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="disquite" />
      <section>
        <IoChatboxEllipsesOutline />
        <IoPodiumOutline />
        <IoLogInOutline />
      </section>
    </nav>
  );
}

export default Navbar;
