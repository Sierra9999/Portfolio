import React from "react";

const OpenGraph = () => {
  const { description, domain, imgUrl } = {
    domain: "https://sierramateo.com/",
    description:
      "Front-end Developer - Building Clean, Beautiful Web Applications",
    imgUrl:
      "https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <head>
      <meta property="og:title" content="Mateo Sierra ⭕" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={domain} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="300" />
    </head>
  );
};

export default OpenGraph;
