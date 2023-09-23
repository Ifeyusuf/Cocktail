import React from 'react'
import { Link } from 'react-router-dom'

const Cocktails = ({image, id, category,names,glass}) => {
  return (
      <section>
          <article className='box-shadow '>
              <img src={image} alt={names} className="img"/>
            <div className="py-1">
              <p className='ps-1 pb-1'>Name: <span className='fw-bold'>{names}</span></p>
              <p className='ps-1 pb-1'>Glass: {glass}</p>
              <p className='ps-1 pb-1'>Category: {category}</p>
              <Link to={`/SingleCocktails/${id}`} className=" primary-btn"> Details</Link>
            </div>
          </article>
      </section>
  ) 
}

export default Cocktails
