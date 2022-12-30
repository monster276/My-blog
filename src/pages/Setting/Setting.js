import React from 'react'
import './Setting.css'
import '../../components/SideBar/Sidebar'
import Sidebar from '../../components/SideBar/Sidebar'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Cập nhập thông tin của bạn</span>
          <span className="settingDeleteTiltle">Xoá tài khoản</span>
        </div>
        <form className="settingForm">
          <label>Ảnh đại diện</label>
          <div className="settingProfilePic">
            <img
              src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <AssignmentIndIcon className="settingIcon"></AssignmentIndIcon>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Tài khoản</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Mật khẩu</label>
          <input type="password" />
          <button className="settingSubmit">Cập nhật</button>
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  )
}

export default Setting
