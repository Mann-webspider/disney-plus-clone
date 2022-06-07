import { React, useEffect } from "react";
import "./styles/Nav.css";
import { auth } from "./firebasE";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "./features/userSlice";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const loginFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
        navigation("/");
        // ...
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (!userName) {
      navigation("/login");
    } else {
      navigation("/");
    }
  }, [userName]);
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div className="nav">
      <div className="logo_div"></div>
      {!userName ? (
        <div className="login">
          <button className="login_btn" onClick={loginFirebase}>
            LOGIN
          </button>
        </div>
      ) : (
        <>
          <div className="menus">
            <ul>
              <a href="/">
                <img src="images/home-icon.svg" alt="" />
                <li>HOME</li>
              </a>
              <a href="/">
                <img src="images/search-icon.svg" alt="" />
                <li>SEARCH</li>
              </a>
              <a href="/">
                <img src="images/watchlist-icon.svg" alt="" />
                <li>WATCHLIST</li>
              </a>
              <a href="/">
                <img src="images/original-icon.svg" alt="" />
                <li>ORIGINALS</li>
              </a>
              <a href="/">
                <img src="images/movie-icon.svg" alt="" />
                <li>MOVIES</li>
              </a>
              <a href="/">
                <img src="images/series-icon.svg" alt="" />
                <li>SERIES</li>
              </a>
            </ul>
          </div>
          <div className="login">
            <img
              src={userPhoto}
              className="userPhoto"
              onClick={() => {
                dispatch(setSignOutState());
                navigation("/login");
              }}
              alt={userName}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Nav;
