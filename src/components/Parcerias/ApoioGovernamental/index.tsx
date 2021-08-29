import React from "react";

import Image from "../../Image";

const ApoioGovernamental = ({ orgaos }) => {
  return (
    <ul>
      {orgaos.map(orgao => (
        <li key={JSON.stringify(orgao)}>
          <Image filename={orgao.filename} alt={orgao.nome} objectFit="contain" />
        </li>
      ))}
    </ul>
  );
};

export default ApoioGovernamental;
