import React from 'react'
import { useCart } from '../../contexts/cart-context';

const CartSummary=()=> {
    const {cartState:{cart}}=useCart();
    const totalAmt=cart.reduce((acc,cur)=> Number(cur.price) * Number(cur.qty) + acc,0);
    const totalItem=cart.reduce((acc,cur)=> Number(cur.qty) + acc,0);
    const deliveryCharges=100;
    const finalAmt=totalAmt+deliveryCharges;

    console.log(totalAmt);
  return (
    <div class="billing-details">
    <h2>PRICE DETAILS</h2>
    <hr />
    <div class="v-space-1rem"></div>
    <div class="flex-row space-between">
        <span class="para-md">Price ({totalItem} items) </span>
        <span>{totalAmt}</span>
    </div>
    <div class="v-space-1rem"></div>
    <div class="flex-row space-between">
        <span class="para-md">Delivery charges</span>
        {
            (cart.length === 0) ? (  <span></span>) : (  <span>{deliveryCharges}</span>)
        }
      
    </div>
    <div class="v-space-1rem"></div>
    <hr />
    <div class="v-space-1rem"></div>
    <div class="flex-row space-between">
        <span class="para-md">TOTAL AMOUNT</span>
        {
        cart.length!==0 && <span>{finalAmt}</span>
        }
    </div>
    <div class="v-space-1rem"></div>
        {
            (cart.length === 0)? ( <span class="para-md"></span>) : 
            ( <span class="para-md">You will save Rs.999 on this order</span>)
        }
    <div class="v-space-1rem"></div>

    <button class="btn-default btn-primary-solid cart-btn">Place order</button>
</div>



    )
}

export {CartSummary};