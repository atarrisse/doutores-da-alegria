import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useEffect, useState } from "react";

import SearchIcon from "../../../../static/icons/Search.svg";

import useWindowSize from "@/utils/useWindowSize";


import * as styles from "./styles.module.scss";

const SearchSection = () => {
  const { width } = useWindowSize();
  const donors = queryDonors().map(donor => donor.node["Doador"]);
  const half = Math.ceil(donors.length / 2);

  const [focus, setFocus] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [query, setQuery] = useState("");
  const [list, setList] = useState(donors);
  const [firstHalf, setFirstHalf] = useState(donors.slice(0, half));
  const [lastHalf, setLastHalf] = useState(donors.slice(-half));


  const handleChange = e => {
    const val = e.target.value;
    if (!val || val === "") setEmpty(true);
    else setEmpty(false);
    setQuery(val.toLowerCase());
  };

  useEffect(() => {
    if (!query || query === "") {
      setList(donors);
      setFirstHalf(donors.slice(0, half));
      setLastHalf(donors.slice(-half));
      return;
    }

    const listFiltered = donors.filter((donor => donor.toLowerCase().includes(query)));
    const firstHalfFiltered = donors.slice(0, half).filter(donor => donor.toLowerCase().includes(query));
    const lastHalfFiltered = donors.slice(-half).filter(donor => donor.toLowerCase().includes(query));
    setList(listFiltered);
    setFirstHalf(firstHalfFiltered);
    setLastHalf(lastHalfFiltered);

  }, [query]);

  return (
    <>
      <fieldset className={styles.fieldset}>
        <label htmlFor="busca" className={styles.label} data-focus={focus} data-empty={empty}>
          Filtre pelo nome
        </label>
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
      {width < 1024 && (
        <ul className={styles.list}>
          {list && list.map((donor) => <li key={donor} className={styles.item}>{donor}</li>)}
        </ul>
      )}
      {width > 1024 &&
        <div className={styles.names}>
          <ul className={styles.list}>
            {firstHalf.map((donor) => <li key={donor} className={styles.item}>{donor}</li>)}
          </ul>
          <ul className={styles.list}>
            {lastHalf.map((donor) => <li key={donor} className={styles.item}>{donor}</li>)}
          </ul>
        </div>
      }
    </>
  );
};

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
  `);
  return allDoadoresCsv.edges;
};

export default SearchSection;
