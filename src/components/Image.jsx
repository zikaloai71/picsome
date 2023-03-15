import React, { useContext, useState } from "react"
import { AppContext } from "../AppContext"
import 'remixicon/fonts/remixicon.css'

import PropTypes from 'prop-types';

function Image({className , img}) {
    const[hover,setHover] = useState(false);

    const{toggleFavorite , toggleCart ,cartItems}=useContext(AppContext);

    const heartIcon = (hover || img.isFavorite )&& <i onClick={()=>toggleFavorite(img.id)} className={img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite" }></i>

    const isOrdered = cartItems.some(item=> item.id === img.id)

    const cartIcon = (hover || isOrdered) && <i className={ isOrdered ? "ri-shopping-cart-fill cart":"ri-add-circle-line cart"} onClick={()=>toggleCart(img,isOrdered)}></i>
   

    return (
        <div className={`${className} image-container`}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        >
            {heartIcon}
            {cartIcon}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes={
    className:PropTypes.string,
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
