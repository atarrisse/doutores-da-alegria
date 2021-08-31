import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { useEffect, useState } from "react";

import SearchIcon from "../../../../static/icons/search.svg";

import useWindowSize from "@/utils/useWindowSize";

import * as styles from "./styles.module.scss";

const SearchSection = () => {
  const { width } = useWindowSize();
  const donors = queryDonors();
  const half = Math.ceil(donors.length / 2);

  const [focus, setFocus] = useState(false);
  const [empty, setEmpty] = useState(true);
  const [query, setQuery] = useState("");
  const [list, setList] = useState(donors);
  const [firstHalf, setFirstHalf] = useState(null);
  const [lastHalf, setLastHalf] = useState(null);

  useEffect(() => {
    setFirstHalf(list.slice(0, half));
    setLastHalf(list.slice(-half));
  }, [list]);

  const handleChange = e => {
    const val = e.target.value;
    if (!val || val === "") setEmpty(true);
    else setEmpty(false);
    setQuery(val.toLowerCase());
  };

  useEffect(() => {
    if (!query || query === "") {
      setList(donors);
      return;
    }

    if (list) {
      const listFiltered = list.filter(({ node: donor }) => {
        const name = donor["Doador"];
        if (name.toLowerCase().includes(query)) {
          return donor;
        }
      });
      setList(listFiltered);
    }

    if (firstHalf) {
      const firstHalfFiltered = firstHalf.filter(({ node: donor }) => {
        const name = donor["Doador"];
        if (name.toLowerCase().includes(query)) {
          return donor;
        }
      });
      setFirstHalf(firstHalfFiltered);
    }

    if (lastHalf) {
      const lastHalfFiltered = lastHalf.filter(({ node: donor }) => {
        const name = donor["Doador"];
        if (name.toLowerCase().includes(query)) {
          return donor;
        }
      });
      setLastHalf(lastHalfFiltered);
    }

  }, [query]);

  return (
    <>
      <fieldset className={styles.fieldset} data-show-label={!focus && !empty}>
        <label htmlFor="busca" className={styles.label}>
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
      {width === undefined || width < 1024 && (
        <>
          {<ul className={styles.list}>
            {list && list.map(({ node: donor }) => {
              const name = donor["Doador"];
              return (
                <li key={donor.id} className={styles.item}>
                  {name}
                </li>
              );
            })}
          </ul>}
        </>
      )
      }
      {width === undefined || width > 1024 &&
        <div className={styles.names}>
          {<ul className={styles.list}>
            {firstHalf && firstHalf.map(({ node: donor }) => {
              const name = donor["Doador"];
              return (
                <li key={donor.id} className={styles.item}>
                  {name}
                </li>
              );
            })}
          </ul>}
          {<ul className={styles.list}>
            {lastHalf && lastHalf.map(({ node: donor }) => {
              const name = donor["Doador"];
              return (
                <li key={donor.id} className={styles.item}>
                  {name}
                </li>
              );
            })}
          </ul>}
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
