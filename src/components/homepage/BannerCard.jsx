import "../../styles/components/banner-card.css";

const BannerCard=()=>{
    return (
        <>
        <main className="main-section">
        <div className="hero-container">
            <h1 className="title">Fashion-hub Sale</h1>
            <p>UPTO 50% OFF on various products</p>
            <a href="/pages/products/products.html" className="shop-btn"><button className="btn-default btn-primary">Shop
                    Now</button></a>
        </div>
    </main>

    <div className="v-space-3rem"></div>
    <div className="v-space-3rem"></div>
        </>
    )
}

export {BannerCard};