import React from "react";

const Marquee = () => {

    const displayedElements = [
    <h1> marquee component </h1>,
    <h1> marquee component </h1>,
    <h1> marquee component </h1>]

  return (
    <div className="marquee">
      <div className="marquee__slider">
        <h1> marquee component </h1> 
        <h1> marquee component </h1> 
        <h1> marquee component </h1> 
      </div>
      <div className="marquee__slider">
        <h1> marquee component </h1> 
        <h1> marquee component </h1> 
        <h1> marquee component </h1> 
      </div>
    </div>
  );
};

export default Marquee;
