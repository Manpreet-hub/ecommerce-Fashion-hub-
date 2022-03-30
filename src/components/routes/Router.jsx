import {Route,Routes } from "react-router-dom";
import { Home, Login, Signup,Products,Cart } from "../../pages/";

const Router=()=>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    )
}


export {Router};