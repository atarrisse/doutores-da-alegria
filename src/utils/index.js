export const parseImages = response => {
  return response.edges.reduce((acc, { node }) => {
    if (node.childImageSharp) acc.push(node.childImageSharp.gatsbyImageData)
    return acc
  }, [])
}

export const getColor = color => {
  if (!color) return "var(--carbon)"
  if (color.includes("#")) return color
  return `var(--${color})`
}
