import React from "react";

import Image from "@/components/Image";

import * as styles from "./styles.module.scss";

const Partners = {
  "Apresentação": [
    { alt: "Faber Castell", filename: "faber-castell.png" }
  ],
  "Patrocinadores": [
    { alt: "Roche", filename: "roche.png" },
    { alt: "Care Plus", filename: "careplus.png" },
  ],
  "Apoio": [
    { alt: "Claro", filename: "logo-claro.png" },
    { alt: "Instituto Claro", filename: "instituto-claro.png" },
    { alt: "Viacom", filename: "viacom.jpg" },
    { alt: "C B N", filename: "cbn.png" },
    { alt: "Cartoon Network", filename: "cartoon-network.png" },
    { alt: "Onet", filename: "onet.png" },
    { alt: "Trama", filename: "trama.png" },
    { alt: "São Paulo para Crianças", filename: "sao-paulo-para-criancas.jpg" },
  ],
  "Realização": [
    { alt: "b t o plus", filename: "bto.png" },
  ]
};


const PartnershipSection = () => {
  return (
    <>
      {
        Object.entries(Partners).map(([key, value]) => (
          <div key={key}>
            <p className={styles.categoria}>{key}</p>
            <ul className={styles.gallery}>
              {
                value.map(item => (
                  <li key={JSON.stringify(item)}>
                    <Image {...item} />
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </>
  );
};

export default PartnershipSection;
