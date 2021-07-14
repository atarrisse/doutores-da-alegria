import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash-es/kebabCase"
import Slider from "react-slick"

import Section from "../components/Section"
import Cover from "../components/Cover"
import Slide from "../components/Slide"


import CONTENT from "../content"
import { CONTENT_SECTION } from "../../types"


const getImages = () => {
  const images = useStaticQuery(graphql`
     query {
      bg: allFile(
        sort: { fields: name }
        filter: { relativeDirectory: { eq: "slides/bg" } }
        ) {
        edges {
          node {
            childImageSharp {
              original {
                src
              }
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
      after: allFile(
        sort: { fields: name }
        filter: { relativeDirectory: { eq: "slides/after" } }
        ) {
        edges {
          node {
            childImageSharp {
              original {
                src
              }
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)
  return images
}

const Index: React.FC = () => {
  const SITE_CONTENT: Array<CONTENT_SECTION> = CONTENT
  const images = getImages()
  const settings = {
    arrows: false,
    adaptiveHeight: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
  }

  return (
    <main>
      <Slider {...settings}>
        <Slide>
          <Cover />
        </Slide>

        {SITE_CONTENT.map((item, i) => {
          const bg = images.bg.edges[i] || undefined;
          const after = images.after.edges[i] || undefined;

          return (
            <Slide key={kebabCase(item.title)}>
              <Section
                images={{ bg, after }}
                {...item}
              />
            </Slide>
          )
        })}
      </Slider>
    </main>
  )
}

export default Index
