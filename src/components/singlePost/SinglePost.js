import React from 'react'
import './SinglePost.css'
import { Edit, Delete } from '@mui/icons-material'
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <h1 className="singlepostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <Edit className="singlePostIcon"></Edit>
            <Delete className="singlePostIcon"></Delete>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Quang Hieu</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDec">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quam
          atque commodi quo dolor nesciunt quidem quia eius. Vero, culpa. Cum
          perspiciatis fugiat debitis adipisci doloribus enim odio quis libero!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel at
          reprehenderit, perspiciatis illum quaerat sint. Consectetur nulla
          alias tempora, quo in ullam deleniti corrupti provident dolor
          laboriosam quos unde esse. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Necessitatibus fugiat fugit sapiente rem fuga
          officia assumenda praesentium magnam aut, maiores dolorem quis
          consequuntur ullam magni, deleniti labore ducimus doloribus quibusdam.
        </p>
      </div>
    </div>
  )
}

export default SinglePost
