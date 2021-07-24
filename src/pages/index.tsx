import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import kebabCase from "lodash/kebabCase"

import Slide from "../components/Slide"
import Section from "../components/Section"
import Parcerias from "../components/Slides/Parcerias"
import Equipe from "../components/Slides/Equipe"


import CONTEUDO, { APOIO, EQUIPE } from "../content"
import { IConteudoSecao } from "../../types.d.ts"


const Index: React.FC = () => {
  const SITE_CONTENT: Array<IConteudoSecao> = CONTEUDO
  const { images } = queryImagens()
  const [img, setImg] = useState({
    slides: {
      after: [],
      bg: [],
      links: []
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
  }

  return (
    <main>
      <Slider {...config}>
        {/* <Slide>
          <Cover />
        </Slide> */}

        {SITE_CONTENT.map((item, i) => {
          const bg = images?.bg?.edges[i];
          const after = images?.after?.edges[i];

          return (
            <Slide key={kebabCase(item.title)} id={kebabCase(item.title)}>
              <Section
                images={{ bg, after }}
                {...item}
              />
            </Slide>
          )
        })}

        <Slide>
          <Equipe />
        </Slide>

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

const findImage = (images, path) => {
  const imgArray = images
    .filter(img => img.edges[0].node.relativePath.includes(path));

  if (imgArray.length === 1) return imgArray[0].edges.map(({ node }) => node)

  const categorized = imgArray.reduce((acc, { edges }) => {
    const category = edges[0].node.dir.split("/").pop();
    acc = {
      [category]: edges.map((({ node }) => node)),
      ...acc,
    }
    return acc
  }, {})
  return categorized
}

const parseImages = rawImgs => {
  let imagens = {
    slides: {
      after: [],
      bg: [],
      links: []
    },
    parcerias: {
      "parceiros-governamentais": [],
      "parceiros-via-lei-de-incentivo-a-cultura": [],
      "parceiros-via-proac": []
    }
  }

  imagens.slides.after = findImage(rawImgs, "after")
  imagens.slides.bg = findImage(rawImgs, "bg")
  imagens.slides.links = findImage(rawImgs, "links")

  imagens.parcerias["parceiros-governamentais"] = findImage(rawImgs, "parceiros-governamentais")
  imagens.parcerias["parceiros-via-lei-de-incentivo-a-cultura"] = findImage(rawImgs, "parceiros-via-lei-de-incentivo-a-cultura")
  imagens.parcerias["parceiros-via-proac"] = findImage(rawImgs, "parceiros-via-proac")

  return imagens
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
