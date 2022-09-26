import React from 'react'

const NewsCoverage = (props) => {
  const { newsCompanies } = props
  return (
    <div className='news-coverage-container'>
      <h3>News Coverage</h3>
      <div className="news-thumbnails-container">
        {
          newsCompanies.map((company, index) => (
            <div className='news-thumbnail-container v-center' key={index}>
              <a href={company.to}>
                <img src={company.thumbnail} alt="" className="news-thumbnail" />
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NewsCoverage