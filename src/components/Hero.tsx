import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text slide-from-left">
        <h1>
          <span className="hero__text__name">Mateo Sierra.<br/></span>
          <span className="hero__text__developer blue-gradient" >Web Developer.<br/></span>
          <span className="hero__text__shopify green-gradient">Shopify Theme Developer.<br/></span> 
          <span className="hero__text__based">Based In <span className="red-gradient">Medellín.</span><br/></span>
        </h1>
      </div>
      <a href="#contact" className="lets-talk">Let&apos;s Talk →</a>
    </section>
  );
};

export default Hero;
