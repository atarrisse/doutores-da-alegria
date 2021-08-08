import React from "react"
import Slider from "react-slick"
import kebabCase from "lodash/kebabCase"

import Slide from "../components/Slides/Slide"
import Cover from "../components/Slides/Cover"

import CONTEUDO from "../content"
import Section from "../components/Section"
import { IConteudoSecao } from "../../types.d.ts"


const Index: React.FC = () => {
  const SITE_CONTENT: Array<IConteudoSecao> = CONTEUDO

  const config = {
    arrows: false,
    adaptiveHeight: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
    lazyLoad: "ondemand",
    // initialSlide: 35
  }

  return (
    <main>
      <Slider {...config}>
        <Slide>
          <Cover />
        </Slide>

        {SITE_CONTENT.map((item, i) => {
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
