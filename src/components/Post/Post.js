import React from 'react'
import './Post.css'
const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/free-psd/aerial-view-woman-using-digital-tablet-with-design-space-startup-concept_53876-11976.jpg?w=2000"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDecripsion'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea
        mollitia doloribus deleniti cupiditate consectetur, aperiam, error ad
        consequuntur repellendus earum asperiores quas atque doloremque tempore
        beatae praesentium. Cum, inventore!
      </p>
    </div>
  )
}

export default Post
