import React from "react";
import { BannerCard } from "../../components/homepage/BannerCard";
import { Footer } from "../../components/homepage/Footer";
import { Header } from "../../components/homepage/Header";
import { RecommendProducts } from "../../components/homepage/RecommendProducts";

const Home=()=>{
    return (
        <>
        <Header/>
        <BannerCard/>
        <RecommendProducts/>
        <Footer/>
        </>
    )
}

export {Home};