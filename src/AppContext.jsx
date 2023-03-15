import React, { useState ,useEffect } from 'react'

const AppContext = React.createContext();

function AppContextProvider(props) {
  const[allPhotos,setAllPhotos]=useState([]);
  const[cartItems,setCartItems]=useState([])
  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(()=>{
    fetch(url)
        .then((response) => response.json())
        .then((data) => setAllPhotos(data));

  },[])

  function toggleCart(img , isOrdered){
    if(isOrdered){
     setCartItems(prevItems => prevItems.filter(item=> item.id !== img.id))
    }
    else{
      setCartItems(prevItem=>[...prevItem,img])
    }
  }
  
  function toggleFavorite(id){
    const updatedArr = allPhotos.map(photo => {
      if(photo.id === id) {
          return {
              ...photo,
              isFavorite: !photo.isFavorite
          }
      }
      return photo
  })
   setAllPhotos(updatedArr)
  }

  return (
    <AppContext.Provider value={{allPhotos , toggleFavorite ,toggleCart , cartItems}}>
        {props.children}
    </AppContext.Provider>
  )
}

export {AppContextProvider,AppContext}
