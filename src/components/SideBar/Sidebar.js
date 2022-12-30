import React from 'react'
import './SideBar.css'
import {
  FacebookRounded,
  Twitter,
  Pinterest,
  Instagram,
  Search,
} from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sidebarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/id/1130150680/photo/blog-and-information-website-concept-workplace-background-with-text.jpg?s=612x612&w=0&k=20&c=BtknpmORYmgMHN5Qty7N0o5mvsk204BG-q4oR8gFl_g="
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          perspiciatis unde dolore, pariatur aliquam placeat reiciendis
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Công việc</li>
          <li className="sidebarListItem">Học Vấn</li>
          <li className="sidebarListItem">Âm nhạc</li>
          <li className="sidebarListItem">Thể thao</li>
          <li className="sidebarListItem">Phim</li>
          <li className="sidebarListItem">Công nghệ</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sideBarTitle">THEO DÕI</span>
        <div className="sidebarSocial">
          <FacebookRounded className="sidebarIcon"></FacebookRounded>
          <Twitter className="sidebarIcon"></Twitter>
          <Pinterest className="sidebarIcon"></Pinterest>
          <Instagram className="sidebarIcon"></Instagram>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
