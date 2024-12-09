import React, { useContext, useState } from 'react'
import classes from './Auth.module.css'
import {  Link, useNavigate } from 'react-router-dom'
import login_logo from "../../assets/images/newLogo.png";
import { auth } from '../../Utility/firebase'
import {ClipLoader} from 'react-spinners'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { DataContext} from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type';
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{user}, dispatch] =useContext(DataContext)
  const [loading,setLoading] =useState({signIn:false,
    singUp:false
  })
  const navigate =useNavigate()
  // console.log(user);
  // console.log(email, password);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      // firebase Auth
    setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user,
          })
    setLoading({ ...loading, signIn: false });
    navigate('/')

        })
        .catch((err) => {
          // console.log(err);
    setLoading({ ...loading, signIn: false });

          setError(err.message)
          
        });
    } else {
    setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
    setLoading({ ...loading, signUp: false });
    navigate("/");
          
        })
        .catch((err) => {
          // console.log(err);
    setLoading({ ...loading, signUp: false });
          setError(err.message);

        });
    }
  };
  // console.log(user);
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
        <img src={login_logo} alt="amazon logo" />
      </Link>
      {/* logo in form */}
      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign in"}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to AMAZON FAKE CLONE conditions of use and
          sale.Please see our privacy Notice,our cookies Notice and our
          Interest-based Ads Notice.
        </p>
        {/* create account btn  */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login__registerButton}
        >
          {loading.singUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "3px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;