import React from 'react'
import {CartSummary,CartItem} from '../../components/'
import { EmptyCart } from '../../components/Cart/EmptyCart';
import { useCart } from '../../contexts/';

function Cart() {
 const {cartState:{cart}}=useCart();
 
  return (

    <div class="cart-container">
        <h2 class="txt-header-color txt-center">My Cart {cart.length}</h2>
        <div class="v-space-2rem"></div>
        <div class="cart">
          {
        
        (cart.length !==0) ? (<CartItem/>) : (<EmptyCart/>)
          }  
        </div>
        <CartSummary/>

    </div>

    )
}

export {Cart};