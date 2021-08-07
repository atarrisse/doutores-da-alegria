import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import kebabCase from "lodash/kebabCase"

import Slide from "../components/Slides/Slide"
import Cover from "../components/Slides/Cover"


import CONTEUDO from "../content"
import Section from "../components/Section"
import { parseImages } from "../utils"
import { IConteudoSecao } from "../../types.d.ts"


const Index: React.FC = () => {
  const SITE_CONTENT: Array<IConteudoSecao> = CONTEUDO
  const { images } = queryImagens()
  const [img, setImg] = useState({
    slides: {
      after: [],
      bg: [],
      people: []
    },
    parcerias: {
      "parceiros-governamentais": [],
      "parceiros-via-lei-de-incentivo-a-cultura": [],
      "parceiros-via-proac": []
    }
  });

  useEffect(() => {
    if (!images) return;
    setImg(parseImages(images.group))
  }, [images])

  const config = {
    arrows: false,
    adaptiveHeight: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
    // initialSlide: 35
  }

  return (
    <main>
      <Slider {...config}>
        <Slide>
          <Cover />
        </Slide>

        {SITE_CONTENT.map((item, i) => {
          // const bg = img?.slides?.bg[i];

          return (
            <Slide
              key={kebabCase(item.title)}
              extra={item.extra}
              id={kebabCase(item.title)}
              theme={{ "--theme-color": `var(--${kebabCase(item.color)})` }}
            >
              <Section
                key={JSON.stringify(item)}
                index={i}
                // images={{ bg }}
                {...item}
              />
            </Slide>
          )
        })}
      </Slider>
    </main>
  )
}



const queryImagens = () => {
  return useStaticQuery(graphql`
     query {
      images: allFile(
        sort: { fields: name }
        filter: { 
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        }
        ) {
        group(field: dir) {
          edges {
            node {
              base
              dir
              name
              relativePath
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
          }
        }
      }
     }
  `)
}


export default Index
