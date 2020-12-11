import React, { useState, useEffect } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
    background: "linear-gradient(45deg, #000000 65%, #FFE81F 90%)",
    color: "#FFE81F",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 30,
  },
});

function ResultList(props) {
  const classes = useStyles();
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

      {results &&
        results.map((result, idx) => {
          {
            return (
              <Card key={idx} className={classes.root}>
                <CardContent>
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
                </CardContent>
              </Card>
            );
          }
        })}
    </div>
  );
}

export default ResultList;
