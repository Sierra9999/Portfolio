import React from "react";

const OpenGraph = () => {
  const { description, domain, imgUrl, title,creator } = {
    domain: "https://sierramateo.com/",
    description:
      "Maximize your online impact with a Medellín-based web developer. Specializing in captivating frontends that drive results.",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1227031906751746048/1227032058141085716/open-graph.jpg?ex=6626eda7&is=661478a7&hm=7d839df48a8430be92aaedadedb5d05407299a03bf65df346aeb8a22ebe6826a&",
    title: "Mateo Sierra ⭕ - Front-End & Shopify Developer ",
    creator : 'Mateo Sierra'
  };

  return (
    <head>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={domain} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:site_name" content="sierramateo.com" />
      <meta property="og:locale" content="locale: en_US.utf-8" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@MateoSierra" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imgUrl} />
      <meta name="twitter:site" content={`@${creator}`} />
      <meta name="twitter:description" content={description} />

      <meta name="author" content="Mateo Sierra" />
      <meta name="language" content="English" />
    </head>
  );
};

export default OpenGraph;
