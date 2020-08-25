  
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop' style={{ textDecoration: 'none' }}>
        SHOP
      </Link>
      <Link className='option' to='/shop' style={{ textDecoration: 'none' }}>
        CONTACT
      </Link>
      {
        currentUser?
        <div className='option' onclick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin' style={{ textDecoration: 'none' }}>SIGN IN</Link>
      }
    </div>
  </div>
);

export default Header;