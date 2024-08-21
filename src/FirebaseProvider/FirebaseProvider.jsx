// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)



const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log(user);

  const [loading, setLoading] = useState(true)

 // update user
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: image
    })
  }


  // social auth providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();


  // create user

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //  signIN user 
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  // google login user
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)


  };

  // facebook login
  const facebookLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider)


  };

  // github login user
  const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
 


  // logOut user

  const logout =() =>{
    setUser(null)
    signOut(auth)
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false)
        setUser(user)

      }
    });

    return () => {
      unSubscribe()
    }
  }, [])


  const allValues = {
    createUser,
    signIn,
    googleLogin,
    githubLogin,
    facebookLogin,
    logout,
    loading,
    user,
    updateUser
  }
  return (
    <AuthContext.Provider value={allValues}>
      {children}
    </AuthContext.Provider>
  );
};


FirebaseProvider.propTypes = {
  children: PropTypes.object
};
export default FirebaseProvider;