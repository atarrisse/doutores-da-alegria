import { GatsbyImage, GatsbyImageProps, getImage, IGatsbyImageData, withArtDirection } from "gatsby-plugin-image";
import React from "react";

import { queryImage } from "@/utils/images";


interface IProps extends React.FunctionComponent<GatsbyImageProps> {
  alt: string;
  defaultImage: any;
  images: Record<string, string>;
}

const ArtDirectionImage: React.FC<IProps> = ({ alt, defaultImage, images, ...others }) => {
  const defaultImg: IGatsbyImageData | undefined =
    getImage(queryImage(defaultImage).node);

  const breakpoints = Object.entries(images).map(([key, value]) => {
    if (!value) return;
    const image = getImage(queryImage(value).node);
    const obj = { media: key, image: image };
    return obj;
  }, []);

  if (!defaultImg || !breakpoints) return;

  const artDirectedImages = withArtDirection(defaultImg, breakpoints);

  return <>
    <GatsbyImage alt={alt} image={artDirectedImages} {...others} />
  </>;
};

export default ArtDirectionImage;