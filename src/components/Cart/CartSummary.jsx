import { useState } from "react";
import { OrderModal } from "../OrderModal/OrderModal";
import { useCart } from "../../contexts/cart-context";

const CartSummary = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const totalAmt = cart.reduce(
    (acc, cur) => Number(cur.price) * Number(cur.qty) + acc,
    0
  );
  const totalItem = cart.reduce((acc, cur) => Number(cur.qty) + acc, 0);
  const deliveryCharges = 100;
  const finalAmt = totalAmt + deliveryCharges;

  return (
    <>
      {cart.length !== 0 && (
        <div className="billing-details">
          <h2>PRICE DETAILS</h2>
          <hr />
          <div className="v-space-1rem"></div>
          <div className="flex-row space-between">
            <span className="para-md">Price ({totalItem} items) </span>
            <span>{totalAmt}</span>
          </div>
          <div className="v-space-1rem"></div>
          <div className="flex-row space-between">
            <span className="para-md">Delivery charges</span>
            {cart.length === 0 ? <span></span> : <span>{deliveryCharges}</span>}
          </div>
          <div className="v-space-1rem"></div>
          <hr />
          <div className="v-space-1rem"></div>
          <div className="flex-row space-between">
            <span className="para-md">TOTAL AMOUNT</span>
            {cart.length !== 0 && <span>{finalAmt}</span>}
          </div>
          <div className="v-space-1rem"></div>
          {cart.length === 0 ? (
            <span className="para-md"></span>
          ) : (
            <span className="para-md">You will save Rs.999 on this order</span>
          )}
          <div className="v-space-1rem"></div>

          <button
            className="btn-default btn-primary-solid cart-btn"
            onClick={() => {
              cartDispatch({ type: "CLEAR_CART" });
              setShowModal(true);
            }}
          >
            Place order
          </button>
        </div>
      )}
      {showModal && <OrderModal setShowModal={setShowModal} />}
    </>
  );
};

export { CartSummary };
