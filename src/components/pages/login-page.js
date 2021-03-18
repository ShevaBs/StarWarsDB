import React from 'react';
import {Redirect} from "react-router-dom";

const LoginPage = ({isLoggedIn, loggedIn}) => {

  if(isLoggedIn){
    return <Redirect to='/secrets'/>
  }


  return (
    <div className='jumbotron'>
      Please logged in!!!
      <button className='btn btn-primary'
              onClick={loggedIn}>
        Log in
      </button>
    </div>
  )

}

export default LoginPage;