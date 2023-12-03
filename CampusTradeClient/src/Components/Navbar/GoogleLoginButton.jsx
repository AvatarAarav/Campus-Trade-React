import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { googleLoginAPI } from '../../apis';
import { useDispatch } from 'react-redux';
import { fetchUserDetails,loginReducer } from '../../Store/UserSlice';

function GoogleLoginButton({closeModal}) {
    const dispatch=useDispatch()
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                const details=jwtDecode(credentialResponse.credential);
                console.log(details)
                googleLoginAPI(details).then(
                    (res)=>{
                        console.log(res)
                        dispatch(fetchUserDetails(res.data.id))
                        dispatch(loginReducer());
                    }
                )
                closeModal()
            }}
            onError={() => {
                console.log('Login Failed');
                closeModal()
            }}
        />
    )
}

export default GoogleLoginButton