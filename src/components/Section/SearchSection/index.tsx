import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

import * as styles from "./styles.module.scss";

const SearchSection = () => {
  const donors = queryDonors();
  return (
    <ul className={styles.list}>
      {donors.map(({ node: donor }) => {
        const name = donor["Doador"];
        return <li key={donor.id} className={styles.item}>{name}</li>
      })}
    </ul>
  )
}

const queryDonors = () => {
  const { allDoadoresCsv } = useStaticQuery(graphql`
     query {
        allDoadoresCsv {
          edges {
            node {
              id
              Doador
            }
          }
        }
      }
  `)
  return allDoadoresCsv.edges;
}

export default SearchSection;