import React from 'react'
import { sucess_stories } from '../staticContent'
import CustomerSucessCard from './CustomerSucessCard'

const Testimony = () => {
  return (
    <div className='testimony-container'>
      <h2 className='testimony-heading'>Customer Sucess Stories</h2>
      <div className="slider">
        {
          sucess_stories.map((story, index) => (
            <CustomerSucessCard story={story} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Testimony