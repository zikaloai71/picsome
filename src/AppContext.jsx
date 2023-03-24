import React, { useState, useEffect } from 'react'

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("Cart")) || []);
  const [favoriteList,setFavoriteList] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, [])

  useEffect(()=>{
    localStorage.setItem("Cart", JSON.stringify(cartItems))
  },[cartItems])

  useEffect(()=>{
     localStorage.setItem("favorites",JSON.stringify(favoriteList))
  },[favoriteList])



  function toggleCart(img, isOrdered) {
    if (isOrdered) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== img.id))
    }
    else {
      setCartItems(prevItem => [...prevItem, img])
    }
  }

  function emptyCart() {
    setCartItems([]);
    localStorage.removeItem("Cart")
  }

  function toggleFavorite(img , isFavorite) {
    if (isFavorite) {
      setFavoriteList(prevItems => prevItems.filter(item => item.id !== img.id))
    }
    else {
      setFavoriteList(prevItem => [...prevItem, img])
    }
  }
  
  return (
    <AppContext.Provider value={{ allPhotos, toggleFavorite,favoriteList, toggleCart, cartItems, emptyCart }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }
