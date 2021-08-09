import React from "react"

import Image from "../../Image"

const ApoioGovernamental = ({ orgaos }) => {
  return (
    <ul>
      {orgaos.map(orgao => (
        <li>
          <Image filename={orgao.filename} alt={orgao.nome} />
        </li>
      ))}
    </ul>
  )
}

export default ApoioGovernamental
