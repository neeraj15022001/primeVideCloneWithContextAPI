import React, {useContext} from 'react';
import Logo from "../assets/logo.png";
import Button from '@material-ui/core/Button';
import "./css/LoginPage.css";
import {auth, provider} from "../firebase";
import { UserContext } from '../ContextApi';
// import {actionTypes} from "../reducer";
// import {useStateValue} from "../StateContext";

function LoginPage() {
    // const [{user},dispatch] = useStateValue();
    const [user, dispatch] = useContext(UserContext);
    function signIn() {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
            // dispatch({
            //     type: actionTypes.SET_USER,
            //     user : result.user
            // })
            dispatch(user => !user);
            localStorage.setItem("name", result.user.displayName)
            localStorage.setItem("url", result.user.photoURL)
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className="loginPage d-grid justify-content-center align-content-center">
            <img src={Logo} alt="image__logo" />
            <Button onClick={signIn} className="loginPage__loginButton m-auto" variant="contained" color="primary">Continue With Google</Button>
        </div>
    )
}

export default LoginPage
