import React from 'react'
import CustomerSucessCard from './CustomerSucessCard'

const ExpertPublications = (props) => {
  const { publications } = props
  return (
    <div className='testimony-container'>
      <h2 className='testimony-heading'>Our Expert publications</h2>
      <div className="slider">
        {
          publications.map((publication, index) => (
            <CustomerSucessCard story={publication} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default ExpertPublications