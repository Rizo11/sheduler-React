import React from 'react'

import { Helmet } from 'react-helmet'

import './page8.css'

const Page8 = (props) => {
  return (
    <div className="page8-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="page8-page8">
        <div className="page8-dropfiles">
          <img
            alt="Rectangle5218"
            src="/external/rectangle5218-y9lm-300h.png"
            className="page8-rectangle"
          />
          <span className="page8-text">
            <span>Drop files or click to upload</span>
          </span>
          <div className="page8-frame">
            <div className="page8-text2">
              <span className="page8-text3">
                <span>Browse</span>
              </span>
            </div>
          </div>
        </div>
        <button className="page8-buttons-button3">
          <div className="page8-text5">
            <span className="page8-text6">
              <span>Back</span>
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Page8
