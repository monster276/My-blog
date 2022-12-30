import React from 'react'
import './Write.css'
import AddIcon from '@mui/icons-material/Add'
const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
        alt=""
      />
      <form className="writeform">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AddIcon className="writeIcon"></AddIcon>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Nội dung"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Hãy kể câu chuyện của bạn nào"
          ></textarea>
        </div>
        <button className="writeSubmit">Đăng bài</button>
      </form>
    </div>
  )
}

export default Write
