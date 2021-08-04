import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import * as styles from "./styles.module.scss";

const ImageSection = ({ filename }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find(edge => edge.node.fluid.originalName === filename)
        if (!image) return null

        return <Img className={styles.image} fluid={image.node.fluid} />
      }}
    />
  );
}

export default ImageSection;