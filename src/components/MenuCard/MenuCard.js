import React from 'react'
// import App from '../App/App.js'
import './MenuCard.css'
import { Link } from 'react-router-dom'

const MenuCard = (props) => {
  let low = props.name.toLowerCase()
  return (
    <Link to={`${low}-game`} className="menu-card">

        {props.name}

    </Link>
  )
}

export default MenuCard
