import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import ManageStories from "../ManageStories";
import { NavLink, Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import './profilebutton.css'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    return history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
      <button onClick={openMenu}>
       <img id="usericon" src="/icons/user.png" alt="User Profile"/>
      </button>
      <div className={ulClassName} id={user ? 'user-logged-in' : 'user-not-logged-in'} ref={ulRef}>
        {user ? (
          <>
            <li>User:  {user.username}</li>
            <li>Email:  {user.email}</li>
            <li>
              <NavLink exact to='/stories/manage'><button>My Stories</button></NavLink> </li>
             <li><NavLink exact to='/tips/manage'><button>My Tips</button></NavLink></li>
             <li><NavLink exact to={`/survivors/current`}><button>My Profile</button></NavLink></li>
            <li><button onClick={handleLogout}>Log Out</button></li>

          </>
        ) : (
          <>
            <li><OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            /></li>

            {/* <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignUpFormModal/>}
            /> */}
            <li><button id="signupnavbutton">
              <Link to="/signup" onClick={closeMenu}>Sign Up</Link>
            </button></li>
          </>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
