import React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet
      title="Balanço 2020 | Doutores da Alegria"
      htmlAttributes={{
        lang: "pt-br",
      }}
    >
      <meta name="description" content="Veja a prestação de contas digital de 2020" />
      <meta name="image" content="/ogimage.png" />

      <meta name="og:title" content="Eu vi isso no balanço dos Doutores da Alegria" />
      <meta name="og:description" content="Veja a prestação de contas digital de 2020" />
      <meta name="og:image" content="/ogimage.png" />
      <meta name="og:url" content="https://balanco.doutoresdaalegria.org.br/" />
      <meta name="og:type" content="website" />

      <meta name="twitter:title" content="Eu vi isso no balanço dos Doutores da Alegria" />
      <meta name="twitter:description" content="Veja a prestação de contas digital de 2020" />
      <meta name="twitter:image" content="/ogimage.png" />
      <meta name="twitter:creator" content="@doutores" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;


