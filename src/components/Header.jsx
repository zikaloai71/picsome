import React from 'react'
import 'remixicon/fonts/remixicon.css'
import{NavLink} from "react-router-dom"
export default function Header() {
  return (
    <header>
            <h2><NavLink  exact to="/">Pic Some</NavLink></h2>
            <NavLink  to="/cart"><i className="ri-shopping-cart-line"></i></NavLink>
    </header>
  )
}
