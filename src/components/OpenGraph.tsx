import React from "react";

const OpenGraph = () => {
  const { description, domain, imgUrl } = {
    domain: "https://sierramateo.com/",
    description:
      "Front-end Developer - Building Clean, Beautiful Web Applications",
    imgUrl:
      "https://cdn.discordapp.com/attachments/1226622215047352351/1226622266717110393/op-thumbnail.jpg?ex=66257001&is=6612fb01&hm=28d213304b755c2632be3abcca6c4c01d4352b5cd9a7f22f5857085441dfd88d&",
  };

  return (
    <head>
      <meta property="og:title" content="Mateo Sierra ⭕" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={domain} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:site_name" content="sierramateo.com"/>
      <meta property="og:locale" content="locale: en_US.utf-8"/>
      <meta property="og:image:width" content="2000" />
      <meta property="og:image:height" content="1200" />
      <meta name='author' content='Mateo Sierra' />
        <meta name='language' content='English' />
    </head>
  );
};

export default OpenGraph;
