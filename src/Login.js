import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase';
import { login } from './features/userSlice'
import './Login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
                })
            );
        })
        .catch(error => alert(error));
    };

    
    const register = () => {
        if(!name){
            return alert("Please enter a Full Name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user
            .updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
        })
        .catch((error) => alert(error));
    };
    
    return (
        <div className = "login">
            <img alt = "" src = "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003%E2%80%932011.png" />

            <form>
                <input onChange = { e => setName(e.target.value) } value = {name} placeholder = 'Full Name (Required if registering)' type = "text" />
                <input onChange = { e => setProfilePic(e.target.value) } value = {profilePic} placeholder = 'Profile pic URL (Optional)' type = "text" />
                <input onChange = { e => setEmail(e.target.value) } value = {email} placeholder = 'E-mail' type = "text" />
                <input onChange = { e => setPassword(e.target.value) } value = {password} placeholder = 'Password' type = "password" />
                <button type = "submit" onClick = {loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "} 
                <span className = "login__register" onClick = {register}>
                     Register Now!
                </span>
            </p>

        </div>
    )
}

export default Login
