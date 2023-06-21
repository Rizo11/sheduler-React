import React from 'react'

import { Helmet } from 'react-helmet'

import './page9.css'

const Page9 = (props) => {
  return (
    <div className="page9-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="page9-page9">
        <div className="page9-dropfiles">
          <img
            alt="RectangleI521"
            src="/external/rectanglei521-tido-300h.png"
            className="page9-rectangle"
          />
          <span className="page9-text"></span>
        </div>
        <div className="page9-group67">
          <img
            alt="Filesfiletext5219"
            src="/external/filesfiletext5219-0nrig.svg"
            className="page9-filesfiletext"
          />
          <span className="page9-text1">
            <span>Item name</span>
          </span>
          <img
            alt="Popularxcircle5219"
            src="/external/popularxcircle5219-0pa8.svg"
            className="page9-popularxcircle"
          />
        </div>
        <div className="page9-frame">
          <div className="page9-text3">
            <span className="page9-text4">
              <span>Upload</span>
            </span>
          </div>
        </div>
        <div className="page9-frame1">
          <div className="page9-text6">
            <span className="page9-text7">
              <span>Cancel</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page9
