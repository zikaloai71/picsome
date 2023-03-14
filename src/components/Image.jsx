import React, { useContext, useState } from "react"
import { AppContext } from "../AppContext"
import 'remixicon/fonts/remixicon.css'

function Image({className , img}) {
    const[hover,setHover] = useState(false);

    const{toggleFavorite}=useContext(AppContext);

    const heartIcon = (hover || img.isFavorite )&& <i onClick={()=>toggleFavorite(img.id)} className={img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite" }></i>
    
    const cartIcon = hover && <i className="ri-add-circle-line cart"></i>
    
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

export default Image
