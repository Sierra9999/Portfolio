import React from "react";

const Marquee = () => {
  return (
    <div className="marquee">
      {[1, 2, 3, 4].map((element) => (
        <div key={element} className="marquee__slider">
          <h1 className="blue-gradient"> React </h1>
          <h1> Next.js </h1>
          <h1 className="green-gradient"> Shopify </h1>
          <h1>Tailwind</h1>
          <h1 className="red-gradient">sass</h1>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
