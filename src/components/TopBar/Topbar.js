import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'
import {
  FacebookRounded,
  Twitter,
  Pinterest,
  Instagram,
  Search,
} from '@mui/icons-material'
const Topbar = () => {
  const user = false
  return (
    <div className="top">
      <div className="topLeft">
        <FacebookRounded className="topIcon"></FacebookRounded>
        <Twitter className="topIcon"></Twitter>
        <Pinterest className="topIcon"></Pinterest>
        <Instagram className="topIcon"></Instagram>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              TRANG CHỦ
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">LIÊN HỆ</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              ĐĂNG BÀI
            </Link>
          </li>
          <li className="topListItem">{user && 'ĐĂNG XUẤT'}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/149897/Originals/pNW6YuFJ5SqkH9V7vsKZQG-970-80_jpg%20f.png"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="register">
                ĐĂNG KÝ
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="login">
                ĐĂNG NHẬP
              </Link>
            </li>
          </ul>
        )}
        <Search className="topSearchIcon"></Search>
      </div>
    </div>
  )
}

export default Topbar
