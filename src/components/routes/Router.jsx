import {Route,Routes } from "react-router-dom";
import { Home, Login, Signup,Products } from "../../pages/";

const Router=()=>{
    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    )
}


export {Router};