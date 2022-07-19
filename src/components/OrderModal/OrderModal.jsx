import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const OrderModal = ({ setShowModal }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setShowModal((prev) => !prev);
      navigate("/");
    }, 1000);
  });
  return (
    <div className="pop-up-container">
      <div className="show-pop-up">
        <h3>Yay!! Order Placed Successfully 🥳</h3>
      </div>
    </div>
  );
};
