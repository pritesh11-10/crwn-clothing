import React from 'react'
import CartItem from '../cart-item/cart-item'
import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux'
import './cart-dropdown.scss'

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                <CartItem key={cartItems.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)