const findImage = (images, path) => {
  const imgArray = images.filter(img =>
    img.edges[0].node.relativePath.includes(path)
  );

  if (imgArray.length === 1) return imgArray[0].edges.map(({ node }) => node);

  const categorized = imgArray.reduce((acc, { edges }) => {
    const category = edges[0].node.dir.split("/").pop();
    acc = {
      [category]: edges.map(({ node }) => node),
      ...acc,
    };
    return acc;
  }, {});
  return categorized;
};

export const parseImages = rawImgs => {
  const imagens = {
    slides: {
      after: [],
      bg: [],
      people: [],
    },
    parcerias: {
      "parceiros-governamentais": [],
      "parceiros-via-lei-de-incentivo-a-cultura": [],
      "parceiros-via-proac": [],
    },
  };

  imagens.slides.after = findImage(rawImgs, "after");
  imagens.slides.bg = findImage(rawImgs, "bg");
  imagens.slides.people = findImage(rawImgs, "people");

  imagens.parcerias["parceiros-governamentais"] = findImage(
    rawImgs,
    "parceiros-governamentais"
  );
  imagens.parcerias["parceiros-via-lei-de-incentivo-a-cultura"] = findImage(
    rawImgs,
    "parceiros-via-lei-de-incentivo-a-cultura"
  );
  imagens.parcerias["parceiros-via-proac"] = findImage(
    rawImgs,
    "parceiros-via-proac"
  );

  return imagens;
};

export const getColor = color => {
  if (!color) return "var(--carbon)";
  if (color.includes("#")) return color;
  return `var(--${color})`;
};
