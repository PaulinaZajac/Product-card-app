import React from 'react';
import ProductImageDesktop from '../images/image-product-desktop.jpg';

const Page = () => {
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={ProductImageDesktop}></img>
      </div>
      <div className="product-description">
        <p className="perfume-heading">PERFUME</p>
        <p className="perfume-title">Gabrielle Essence Eau De Parfum</p>
        <p className="perfume-description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="perfume-price">
          <p> $149.99 </p>
          <p className="perfume-promo">$169.99</p>
        </div>
        <button className="add-to-cart-button">Add to cart</button>
      </div>
    </div>
  );
};

export default Page;
