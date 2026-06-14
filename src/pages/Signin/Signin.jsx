import React from 'react'
import "./Signin.css"
import logo from '../../assets/img/svg/Shape.svg'
import  Sig from '../../assets/img/svg/sig.svg'
import Chakra from '../../assets/img/png/chakra.png'
export default function Signin() {
  return (
//     <div className='Signin'>
//         <div className="header-signin">
//             <div className="logo-signin">
//                 <img src={logo} alt="" />
//                 <p className='signin-p'>PURITY UI DASHBOARD</p>

//             </div>
//             <div className="nav-signin">
//                 <div className="nav-box">
//                     <img src={Sig} alt="" />
//                 </div>
//             </div>
//         </div>

// <div className="left-signin">

// </div>
// <div className="right-signin">

// </div>
//     </div>
 <div className="container">
      <div className="login-box">
        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Enter your email and password to sign in</p>

        <label>Email</label>
        <input type="email" placeholder="Your email address" />

        <label>Password</label>
        <input type="password" placeholder="Your password" />

        <div className="options">
          <label className="remember">
            <input type="checkbox" />
            <span className="toggle"></span>
            Remember me
          </label>
        </div>

        <button className="btn">SIGN IN</button>

        <p className="signup-text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
      <img id='rasim' src={Chakra} alt="" />
    </div>


  )
}
