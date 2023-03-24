import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext';
import CartItem from '../components/CartItem';

export default function Cart() {
  const [buttonText, setButtonText] = useState("Place Order")
  const { cartItems,emptyCart } = useContext(AppContext);
 

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  const calcTotal = () => {
    let total = 0
    cartItems.forEach(item => total += 5.99)
    return total.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
  function placeOrder() {
    setButtonText("ordering...");
    setTimeout(() => {
      console.log("order placed")
      setButtonText("Place Order")
      emptyCart()
    }
      , 3000)

  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total:{calcTotal()} </p>
      {cartItems.length > 0 ? <div className="order-button">
        <button onClick={placeOrder
        }>{buttonText}</button>
      </div> : <p>You have no cart Items in you cart</p>}
    </main>
  )
}
