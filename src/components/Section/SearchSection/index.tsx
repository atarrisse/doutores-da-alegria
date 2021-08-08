import * as React from "react";
import { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import SearchIcon from "../../../../static/icons/search.svg"

import * as styles from "./styles.module.scss";

const SearchSection = () => {
  const donors = queryDonors();
  const [focus, setFocus] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [query, setQuery] = useState("");
  const [list, setList] = useState(donors);

  const handleChange = (e) => {
    let val = e.target.value;
    if (!val || val === "") setEmpty(true)
    else setEmpty(false);
    setQuery(val.toLowerCase());
  }

  useEffect(() => {
    if (!query || query === "") {
      setList(donors);
      return;
    }

    const filtered = donors.filter(({ node: donor }) => {
      const name = donor["Doador"];
      if (name.toLowerCase().includes(query)) {
        return donor
      }
    })
    setList(filtered);

  }, [query])

  return (
    <>
      <fieldset className={styles.fieldset} data-show-label={!focus && !empty}>
        <label htmlFor="busca" className={styles.label}>Filtre pelo nome</label>
        <input
          type="text"
          id="busca"
          className={styles.input}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={handleChange}
        />
        <SearchIcon className={styles.icon} />
      </fieldset>
      <ul className={styles.list}>
        {list
          .map(({ node: donor }) => {
            const name = donor["Doador"];
            return <li key={donor.id} className={styles.item}>{name}</li>
          })}
      </ul>
    </>
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