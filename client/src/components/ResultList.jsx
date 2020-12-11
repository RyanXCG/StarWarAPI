import React, { useState, useEffect } from "react";
import axios from "axios";
function ResultList(props) {
  const [results, setResults] = useState([]);

  const onSingleURLClicked = (key, result) => {
    console.log(key, result);
    key === "homeworld" &&
      result[key] &&
      axios
        .get(result[key])
        .then((res) => {
          console.log(res);
          setResults([res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    console.log(props.searchSub, props.searchTypeSub);
    props.searchTypeSub &&
      props.searchSub &&
      axios
        .get(
          `https://swapi.dev/api/${props.searchTypeSub}/?search=${props.searchSub}`
        )
        .then((res) => {
          console.log(res);
          setResults(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [props.searchSub, props.searchTypeSub]);

  return (
    <div>
      <h2>Search Result: {props.searchSub}</h2>
      <ul>
        {results &&
          results.map((result, idx) => {
            {
              return (
                <li key={idx}>
                  <ul>
                    {Object.keys(result).map((key, idx) => {
                      return (
                        <li
                          onClick={() => onSingleURLClicked(key, result)}
                          key={idx}
                        >
                          {key}: {result[key]}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}

export default ResultList;
