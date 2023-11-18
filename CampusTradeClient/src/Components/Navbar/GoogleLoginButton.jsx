import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function GoogleLoginButton() {
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                const details=jwtDecode(credentialResponse.credential);
                console.log(details)
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default GoogleLoginButton