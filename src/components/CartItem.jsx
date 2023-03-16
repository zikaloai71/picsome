import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import PropTypes from "prop-types"
import useHover from '../hooks/useHover'

export default function CartItem({ item }) {
    const [hover, ref] = useHover()
    const { toggleCart } = useContext(AppContext);
    const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            
            <i className={iconClassName} 
            onClick={() => { toggleCart(item, true) }}
            ref={ref}
            >
            </i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })
}