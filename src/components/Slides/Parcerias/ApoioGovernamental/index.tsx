import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const getImgData = img => img.childImageSharp.gatsbyImageData


const ApoioGovernamental = ({ logos, orgaos }) => {
  return (
    <>
      <ul>
        {
          orgaos.map((orgao, i) => (
            <li>
              <GatsbyImage image={getImgData(logos[i])} alt={orgao.nome} />
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default ApoioGovernamental
