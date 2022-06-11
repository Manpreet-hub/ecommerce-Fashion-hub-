import { Route, Routes, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Products,
  Cart,
  WishlistProducts,
} from "../../pages/";
import { useAuth } from "../../contexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoutes = ({ children }) => {
  const { authState } = useAuth();
  const { isAuthenticated } = authState;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <ProtectedRoutes>
              <WishlistProducts />
            </ProtectedRoutes>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export { Router, ProtectedRoutes };
