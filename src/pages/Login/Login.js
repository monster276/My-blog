import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Đăng nhập</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Email" />
        <label>Mật khẩu</label>
        <input className="loginInput" type="password" placeholder="Password" />
        <button className="loginButtons">Đăng nhập</button>
      </form>
      <button className="RegisterButton">
        <Link className="link" to="/register">
          Đăng ký
        </Link>
      </button>
    </div>
  )
}

export default Login
