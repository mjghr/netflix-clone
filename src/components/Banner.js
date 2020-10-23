import React from "react";
import { useState, useEffect } from "react";
import "../stylesheets/Banner.css";
import axios from "../axios";
import { requests } from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* Title */}
        <h1 className="banner__title">{movie?.title || movie?.name}</h1>
        {/* Play and MyList Buttons */}
        <div className="banner__buttons">
          <a href="#">PLAY</a>
          <a href="#">MYLIST</a>
        </div>
        {/* Description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
