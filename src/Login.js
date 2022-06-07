import "./styles/Login.css";
import Nav from "./Nav";
import { auth } from "./firebasE";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserLoginDetails } from "./features/userSlice";

function Login() {
  const provider = new GoogleAuthProvider();

  const navigation = useNavigate();
  const dispatch = useDispatch();
  // const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);
  // const userPhoto = useSelector(selectUserPhoto);

  const loginFirebase = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);

        // ...
        navigation("/");
      })
      .catch((error) => {});
  };
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
    <div className="bg_img">
      <Nav />
      <div className="main">
        <div className="contant">
          <div className="cta_logo1">
            {/* <img src="../../public/images/cta-logo-one.svg" alt="" /> */}
          </div>
          <div>
            <button className="btn" onClick={loginFirebase}>
              GET ALL THERE
            </button>
          </div>
          <div className="description">
            Get premium access to raya and the last dragon for an additional fee
            with disney + subscription . As of 03/26/21 , the price of Disney +
            and Disney Bundle will increase by 1$
          </div>
          <div className="cta_logo2"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
