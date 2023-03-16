import React, { useContext, useState } from 'react'
import { AppContext } from '../AppContext'

export default function CartItem({ item }) {
    const [trashClass, setTrashClass] = useState("ri-delete-bin-line")
    const { toggleCart } = useContext(AppContext);

    return (
        <div className="cart-item">
            <i className={trashClass + " bigFontTrash"} 
            onMouseEnter={()=>setTrashClass("ri-delete-bin-fill")} 
            onMouseLeave={()=>setTrashClass("ri-delete-bin-line")} 
            onClick={() => { toggleCart(item, true) }}>
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
