import { useState } from "react";
import { useCart } from "../../contexts/cart-context";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartSummary = ({
  checkedAddressSelector,
  placeholder,
  printAddressData,
}) => {
  const [showModal, setShowModal] = useState(false);
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const navigate = useNavigate();
  const totalAmt = cart.reduce(
    (acc, cur) => Number(cur.price) * Number(cur.qty) + acc,
    0
  );
  const totalItem = cart.reduce((acc, cur) => Number(cur.qty) + acc, 0);
  const deliveryCharges = 100;
  const finalAmt = totalAmt + deliveryCharges;

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function checkoutHandler() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Something went Wrong. Are you online?");
      return;
    }
    const options = {
      key: "rzp_test_4IGRK6rH6D7DRo",
      amount: finalAmt * 100,
      currency: "INR",
      name: "Fashion-hub",
      description: "Thank you for shopping with us",
      handler: function (response) {
        navigate("/orderSummary");
        cartDispatch({
          type: "CHECKOUT_ORDER",
          payload: response.razorpay_payment_id,
        });
        cartDispatch({ type: "CLEAR_CART" });
      },
      prefill: {
        name: "Manpreet Singh",
        email: "manpreet@gmail.com",
        contact: "9023046719",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const placeOrderHandler = () => {
    if (printAddressData.length === 0) {
      toast.info("Select an address to proceed!");
      return;
    }
    checkoutHandler();
  };

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

          {placeholder === "placeholder" ? (
            <button className="btn-default btn-primary-solid cart-btn">
              <Link to="/address"> Place order</Link>
            </button>
          ) : (
            <button
              className={
                checkedAddressSelector || printAddressData.length === 0
                  ? "btn-default btn-primary-solid cart-btn"
                  : "btn-default"
              }
              disabled={
                checkedAddressSelector || printAddressData.length === 0
                  ? false
                  : true
              }
              onClick={placeOrderHandler}
            >
              Proceed to pay
            </button>
          )}
        </div>
      )}
    </>
  );
};

export { CartSummary };
