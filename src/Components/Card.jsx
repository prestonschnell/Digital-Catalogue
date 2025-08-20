import React from 'react'
import {Link} from 'react-router'

const Card = (props) => {
  return (
    <div className="category-item">
      <Link to={props.link}>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
      </Link>
        </div>
  )
}

export default Card
