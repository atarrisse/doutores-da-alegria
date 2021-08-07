import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./styles.module.scss";


const Image = ({ filename, alt, ...others }) => {
  console.log(filename);
  const image = queryImage(filename);
  if (!image?.node) return null;

  return (
    <GatsbyImage
      className={styles.image}
      image={image.node.childImageSharp.gatsbyImageData}
      alt={alt ? alt : ""}
      {...others}
    />
  );
}

const queryImage = (filename) => {
  const { allFile } = useStaticQuery(graphql`
     query {
        allFile(filter: {ext: {regex: "/(png|svg|jpg)/"}}) {
          edges {
            node {
              id
              absolutePath
              childImageSharp {
                id
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  `)
  const image = allFile?.edges?.find(edge => {
    return edge.node.absolutePath.includes(filename)
  });
  return image
}

export default Image;