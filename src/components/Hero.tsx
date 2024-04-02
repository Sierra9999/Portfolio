import React from "react";

const Hero = () => {
  return (
    <section className="hero">
        <h1 className="hero__name"> Mateo Sierra.
          
        </h1>
        <h1 className="hero__focusing"><span>Focusing</span> <span>On</span></h1>
        <div className="hero__bottom">
          <div className="hero__services">
              <h2 className="service ">Next.js</h2>
              <h2 className="service green-gradient">Shopify</h2>
              <h2 className="service blue-gradient">React </h2>
          </div>
          <h1 className="hero__bottom-text">Web Solutions</h1>
        </div>
    </section>
  );
};

export default Hero;
