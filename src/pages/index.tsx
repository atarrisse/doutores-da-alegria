import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import kebabCase from "lodash/kebabCase"

import Slide from "../components/Slide"
import Parcerias from "../components/Slides/Parcerias"
import Equipe from "../components/Slides/Equipe"
import Cover from "../components/Slides/Cover"


import CONTEUDO, { APOIO } from "../content"
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
    initialSlide: 28
  }

  return (
    <main>
      <Slider {...config}>
        <Slide>
          <Cover />
        </Slide>

        {SITE_CONTENT.map((item, i) => {
          const bg = img?.slides?.bg[i];
          const people = img?.slides?.people.filter(person => {
            return person.base.includes(`slide_${(i + 1)}_`)
          });

          return (
            <Slide key={kebabCase(item.title)} id={kebabCase(item.title)}>
              <Section
                key={JSON.stringify(item)}
                images={{ bg }}
                {...item}
              />
            </Slide>
          )
        })}


        {
          APOIO.map(apoio => (
            <Slide key={JSON.stringify(apoio)}>
              <Parcerias apoio={apoio} logos={img.parcerias} />
            </Slide>
          ))
        }
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
