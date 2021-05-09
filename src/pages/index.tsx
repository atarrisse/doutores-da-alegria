import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash-es/kebabCase"

import Section from "../components/Section"

import CONTENT from "../content"
import { CONTENT_SECTION } from "../../types"

const UsingTypescript: React.FC = () => {
  const SITE_CONTENT: Array<CONTENT_SECTION> = CONTENT

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name }
        filter: { relativeDirectory: { eq: "rodape" } }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)
  const images = allFile.edges

  return (
    <main>
      {SITE_CONTENT.map((item, i) => {
        const img = images[i]

        return (
          <Section
            key={kebabCase(item.title)}
            image={img.node.childImageSharp.gatsbyImageData}
            {...item}
          />
        )
      })}
    </main>
  )
}

export default UsingTypescript
