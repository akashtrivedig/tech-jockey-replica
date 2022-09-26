import React from 'react'
import { banner } from '../staticContent'

const Banner = (props) => {
  const { type } = props
  const classStyle = type % 2 ? 'banner1' : 'banner2'
  return (
    <div className={classStyle}>
      <div className="banner-thumbnail-container">
        <img src={banner[type].thumbnail} alt="" />
      </div>
      <div className="banner-content-container">
        <h1 className="banner-heading">{banner[type].heading}</h1>
        <div className="banner-content">{banner[type].content}</div>
        <button className="banner-button">{banner[type].buttonContent}</button>
      </div>
    </div>
  )
}

export default Banner