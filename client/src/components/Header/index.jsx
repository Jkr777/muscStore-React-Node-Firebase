import React from 'react';
import CartIcon from '../Cart-Icon';
import CartDropdown from '../Cart-dropdown';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/action-generator';
import { createStructuredSelector } from 'reselect'; 
import { selectCartHidden } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selectors';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className="header">
    <Link to='/'>
      <i className="fab fa-napster logo"></i>
    </Link>
    <div className="nav">
      <Link className="nav__link" to='/shop'>SHOP</Link>
      {
        currentUser ? 
          <Link to='/' className="nav__link" onClick={signOutStart}>SIGN OUT</Link> 
         :  
          <Link className="nav__link" to='/authentication'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    { !hidden && <CartDropdown /> }
  </div>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, { signOutStart })(Header);