import { useCart } from "../../contexts";
import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();
  const {
    cartState: { checkout },
  } = useCart();
  return (
    <div className="order-summary-container">
      <h1>Yay! Order Placed Successfully 🥳</h1>
      <span>
        <strong>Transaction Id: </strong> {checkout}
      </span>
      <button
        className="btn-default btn-primary"
        onClick={() => navigate("/products")}
      >
        Continue Shopping
      </button>
    </div>
  );
};
