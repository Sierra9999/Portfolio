import React from "react";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__name"> Mateo Sierra.</h1>
        <h1 className="hero__focusing">Frontend Developer</h1>
        <h1 className="hero__focusing">shopify Developer</h1>
        <h1 className="hero__location">Based in <span className="red-gradient">Medellin.</span></h1>
      </div>
      <a href="#contact">let&apos;s connect</a>
      <div className="hero__marquee">
        <Marquee></Marquee>
      </div>
    </section>
  );
};

export default Hero;
