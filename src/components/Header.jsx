import React, { useContext } from 'react'
import 'remixicon/fonts/remixicon.css'
import { NavLink } from "react-router-dom"
import { AppContext } from '../AppContext'
export default function Header() {
  const { cartItems } = useContext(AppContext)

  return (
    <header>
      <h2><NavLink  to="/">Pic Some</NavLink></h2>
      <NavLink className="positionRel" to="/cart"> <i className={cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"}></i>{cartItems.length > 0 && <p className='noOfItemsInCart'>{cartItems.length}</p>}</NavLink>
    </header>
  )
}
