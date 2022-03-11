import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLogin from 'react-google-login';

const UseLogin = () => {
  const [userLog, setUserLog] = useState(false)
  const [userName, setUserName] = useState('')
  const [userPhoto, setUserPhoto] = useState('')
  const navigate = useNavigate()

  const responseGoogle = (response) => {
    if (response.profileObj) {
      setUserLog(true);
      navigate("/posts")
      setUserName(response.profileObj.name)
      setUserPhoto(response.profileObj.imageUrl);
    } else {
      setUserLog(false);
      navigate("/")
    }
  }

  return (
    <Fragment>
      {userLog ? (
        <div className='header__user-login'>
          <div className='header__user-login-photo'>
            <img src={userPhoto}
              className='header__user-login-img'
              alt="" />
          </div>
          <p className='header__user-login-name'>{userName}</p>
        </div>
      ) : (
        <GoogleLogin
          clientId="524333331723-99drdgnj2j4hggof34pclcfa79befa91.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </Fragment>
  )
}

export default UseLogin