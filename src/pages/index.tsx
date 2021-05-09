import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash-es/kebabCase"
import Slider from "react-slick"

import Section from "../components/Section"

import CONTENT from "../content"
import { CONTENT_SECTION } from "../../types"

const getImages = () => {
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
  return allFile.edges
}

const Index: React.FC = () => {
  const SITE_CONTENT: Array<CONTENT_SECTION> = CONTENT
  const images = getImages()
  const settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <main>
      <Slider {...settings}>
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
      </Slider>
    </main>
  )
}

export default Index
