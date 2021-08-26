import { graphql, useStaticQuery } from "gatsby";

export const queryImage = filename => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: { regex: "/(png|svg|jpg)/" } }) {
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
  `);
  const image = allFile?.edges?.find(edge => {
    return edge.node.absolutePath.includes(filename);
  });
  return image;
};