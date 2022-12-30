import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="register">
      <span className="registerTitle">Đăng ký</span>
      <form className="loginForm">
        <label>Username</label>
        <input type="text" placeholder="Tên tài khoản của bạn" />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Email" />
        <label>Mật khẩu</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Password"
        />
        <button className="registerButton">Đăng Ký</button>
      </form>
      <button className="loginButton">
        <Link className="link" to="/login">
          Đăng nhập
        </Link>
      </button>
    </div>
  )
}

export default Login
