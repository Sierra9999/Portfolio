import React from "react";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__name slide-from-left"> Mateo Sierra <span className="bounce red-gradient">.</span></h1>
        <h1 className="hero__focusing slide-from-right blue-gradient">Frontend Developer</h1>
        <h1 className="hero__focusing slide-from-right green-gradient">shopify Developer</h1>
        <h1 className="hero__location slide-from-bottom animation-duration-2">Based in <span className="red-gradient">Medellin.</span></h1>
        <a href="#contact" className="hero__cta-button">Let&apos;s Connect</a>
      </div>

      <div className="hero__marquee">
        <Marquee></Marquee>
      </div>
    </section>
  );
};

export default Hero;
