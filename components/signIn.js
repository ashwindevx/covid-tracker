import React, { useEffect, useContext } from "react";
import { Context } from "../context/store";
import { auth, authStateChanged } from "../firebase/firebase";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const SignIn = ({ value }) => {
  // console.log(value);
  const {
    updateIsLogin,
    detail: { isLogin },
  } = useContext(Context);

  console.log(isLogin);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        if (re.user.emailVerified) {
          updateIsLogin(true);
        }
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        updateIsLogin(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  authStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid);
    } else {
      console.log("user is logged out");
    }
  });

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChange();
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <div>
      {!isLogin ? (
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={signInWithGoogle}
        >
          {value}
        </button>
      ) : (
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={signOutWithGoogle}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default SignIn;
