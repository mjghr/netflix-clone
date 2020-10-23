import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../stylesheets/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import PopUp from "./PopUp";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState();
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [trailer, setTrailer] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie);
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          setTrailer(url);
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      {/* <Popup /> */}
      <h1>{title}</h1>

      {/* title */}

      {/* posters container */}
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="movie__image__x"
            // onClick={() => handleClick(movie)}
            onClick={() => {
              handleClick(movie);
              setModal(true);
              setMovie(movie);
            }}
            key={movie.id}
            className={`poster__img ${isLargeRow && "poster__imgLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
      {modal && (
        <PopUp
          movie={movie}
          trailerUrl={trailer}
          open={modal}
          onClose={() => setModal(false)}
        />
      )}
      {/* <CloseIcon /> */}
      {/* {trailerUrl && <YouTube opts={opts} videoId={trailerUrl} />} */}
    </div>
  );
}

export default Row;
