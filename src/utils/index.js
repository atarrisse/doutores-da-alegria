export const parseImages = response => {
  return response.edges.reduce((acc, { node }) => {
    if (node.childImageSharp) acc.push(node.childImageSharp.gatsbyImageData)
    return acc
  }, [])
}
