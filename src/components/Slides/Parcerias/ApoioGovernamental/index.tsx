// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"


const ApoioGovernamental = () => {

  return (
    <>
      <ul>
        <li>
          <StaticImage
            alt="Lei de incentivo à cultura"
            title="Lei de incentivo à cultura"
            placeholder="blurred"
            src="../../../../images/patrocinadores/parceiros-governamentais/governamentais-1"
          // height={96}
          />
        </li>
      </ul>

    </>
  )
}

export default ApoioGovernamental
