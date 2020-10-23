import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Row from "./components/Row";
import { requests, getGenres } from "./request";
import CopyrightIcon from "@material-ui/icons/Copyright";

const date = new Date();

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchAComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <div className="footer">
        <h1 className="copy">
          <CopyrightIcon className="copy__icon" />
          Created by
          <a href="https://github.com/mjghr">MjGhr</a>
        </h1>
      </div>
    </div>
  );
}

export default App;
