import kebabCase from "lodash/kebabCase";
import React from "react";
import Slider from "react-slick";

import Image from "@/components/Image";
import Section from "@/components/Section";
import Cover from "@/components/Slides/Cover";
import Slide from "@/components/Slides/Slide";

import Conteudo from "@/conteudo/conteudo";
import Estatisticas from "@/conteudo/estatisticas";
import Expediente from "@/conteudo/expediente";
import ImpactoSocial from "@/conteudo/impactoSocial";
import Parcerias from "@/conteudo/parcerias";

import * as styles from "./styles.module.scss";
import Menu from "@/components/Menu";

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
};

const createSlides = data => {
  const { slides, className } = data;
  return slides.map((item, i) => {
    return (
      <Slide
        data-theme={item.color}
        className={className}
        key={`${kebabCase(item.title)}-${item.id}`}
        extra={item.extra}
        id={`${kebabCase(item.title)}-${item.id}`}
        theme={{ "--theme-color": `var(--${kebabCase(item.color)})` }}
      >
        <Section key={JSON.stringify(item)} index={i} {...item} />
      </Slide>
    );
  });
};

const Index: React.FC = () => {
  return (
    <main>
      <Slider {...config}>
        <Cover />
        {createSlides({ slides: Conteudo })}
        {createSlides({ slides: ImpactoSocial, className: styles.numberSlide })}
        {createSlides({ slides: Estatisticas })}
        {createSlides({ slides: Parcerias })}
        {createSlides({ slides: Expediente })}
      </Slider>

      <a href="https://doutoresdaalegria.org.br/">
        <Image
          alt="Logo do Doutores da Alegria"
          className={styles.logo}
          filename="logo_rodape.png"
          height={220}
          objectFit="contain" />
      </a>
    </main>
  );
};

export default Index;
