import kebabCase from "lodash/kebabCase"
import React from "react"
import Slider from "react-slick"

import Section from "@/components/Section"
import Cover from "@/components/Slides/Cover"
import Slide from "@/components/Slides/Slide"

import * as styles from "./styles.module.scss"

import CONTEUDO from "@/content/content"
import ImpactoSocial from "@/content/impactoSocial"

import { IConteudoSecao } from "../../types.d.ts"

const Index: React.FC = () => {
  const SITE_CONTENT: Array<IConteudoSecao> = CONTEUDO

  const config = {
    adaptiveHeight: true,
    arrows: false,
    className: styles.slickWrapper,
    dots: false,
    infinite: false,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
      },
      {
        breakpoint: 999999999999999, // a unrealistically big number to cover up greatest screen resolution
        settings: "unslick",
      },
    ],
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
  }

  return (
    <main>
      <Slider {...config}>
        {/* <Cover /> */}

        {/* {SITE_CONTENT.map((item, i) => {
          return (
            <Slide
              key={kebabCase(item.title)}
              extra={item.extra}
              id={`${kebabCase(item.title)}-${item.id}`}
              theme={{ "--theme-color": `var(--${kebabCase(item.color)})` }}
            >
              <Section key={JSON.stringify(item)} index={i} {...item} />
            </Slide>
          )
        })} */}
        {ImpactoSocial.map((item, i) => {
          return (
            <Slide
              className={styles.numberSlide}
              key={kebabCase(item.title)}
              extra={item.extra}
              id={`${kebabCase(item.title)}-${item.id}`}
              theme={{ "--theme-color": `var(--${kebabCase(item.color)})` }}
            >
              <Section key={JSON.stringify(item)} index={i} {...item} />
            </Slide>
          )
        })}
      </Slider>
    </main>
  )
}

export default Index
