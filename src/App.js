import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Header from "./header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      
      {/* Header */}
      < Header />

      { !user ? (
        <Login />
      ) : (

        <div className = "app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>

      )}

      

    </div>
  );
}

export default App;
