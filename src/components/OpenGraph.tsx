import React from "react";

const OpenGraph = () => {
  const { description, domain, imgUrl, title,creator } = {
    domain: "https://sierramateo.com/",
    description:
      "Explore the creative journey of Mateo Sierra, showcasing a portfolio filled with innovative designs and captivating projects. Discover the essence of excellence in every pixel and line.",
    imgUrl:
      "https://static.semrush.com/blog/uploads/media/6e/d7/6ed7dd7a5dec745021d9fe5bdf88aff6/629ce5cabb805588b7b30c52c16e8598/meta-tag-sm.png",
    title: "Mateo Sierra ⭕",
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
