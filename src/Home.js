import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
      <img className="home-image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" />
      <div className="home-colum">
      <div className="home-row">
      <Product 
      id="12345678"
      title="Loose Simple Blue jeans with cut"
      price={39.99}
      rating={5}
      image="https://ae01.alicdn.com/kf/H72ffe720fa784fe3961f2c80e237093bp/Jeans-Women-Chic-Loose-Simple-Blue-Korean-Style-Summer-Casual-Daily-Harajuku-All-match-High-Quality.jpg"
      />
      <Product 
      id="12345678"
      title="Solid O-neck PulloverFull Sleeve Sweatshirts"
      price={29.99}
      rating={4}
      image="https://canary.contestimg.wish.com/api/webimage/5eccd94fd491f8631411f874-large.jpg?cache_buster=a6ca30c0e68950e3da71f3f4ae0d4346"
      /></div>
      <div className="home-row">
      <Product 
      id="12345678"
      title="Jacket Zipper Splicing Hooded Top Female Long Sleeve "
      price={35.99}
      rating={4}
      image="https://ae01.alicdn.com/kf/Hf6b4f3f9db5f462aa2bfe3a5929a42fab/Fashion-Korean-Style-Jacket-Women-Zipper-Splicing-Hooded-Top-Female-Long-Sleeved-Blouse-Loose-Coat-Plus.jpg"
      />
      <Product 
      id="12345678"
      title="Jackets Women Single Breasted Pockets "
      price={40.99}
      rating={4}
      image="https://ae01.alicdn.com/kf/HTB1QafVO3TqK1RjSZPhq6xfOFXa0/Jackets-Women-Single-Breasted-Pockets-Leisure-Daily-Loose-Harajuku-Solid-Simple-All-match-Korean-Style-Jacket.jpg"
      />
      <Product 
      id="12345678"
      title="Rocky Leather Jacket"
      price={99.99}
      rating={5}
      image="https://cdn.shopify.com/s/files/1/0024/3882/4006/products/product-image-897656362_720x.jpg?v=1571761967"
      />
      </div>
      <div className="home-row">
      <Product 
      id="12345678"
      title="Grey oversized plaid shirt bell sleeve "
      price={19.99}
      rating={4}
      image="https://d2h1pu99sxkfvn.cloudfront.net/b0/10061095/528454279_A0vXyj1mMS/P0.jpg"
      />
      <Product 
      id="12345678"
      title="Multicolored oversized plaid shirt bell sleeve"
      price={19.99}
      rating={3}
      image="https://i.pinimg.com/originals/ef/3a/61/ef3a6159ab421aaf450905babb5cd79f.jpg"
      /></div>
      </div>
    </div>
  )
}

export default Home
