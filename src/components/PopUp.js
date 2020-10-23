import React, { useState } from "react";
import "../stylesheets/PopUp.css";
import CloseIcon from "@material-ui/icons/Close";
import YouTubeIcon from "@material-ui/icons/YouTube";

function PopUp({ movie, trailerUrl, modal, onClose }) {
  const [close, setClose] = useState(false);
  const refreshClose = () => {};
  if (!modal) {
    // return null;
  }
  return (
    <div className="modal__bg">
      <div className="modal__contents">
        <CloseIcon onClick={onClose} className="modal__closeButton" />
        <img
          className="modal__img"
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt=""
        />
        <div className="modal__right">
          <h1 className="modal__title">{`Title : ${movie?.title}`}</h1>
          <h1>{`Score  :   ${movie?.vote_average}/10`}</h1>
          <h1 className="gg">OverView :</h1>
          <p className="modalOverview">{movie?.overview}</p>
          <a className="modal__trailer" href={trailerUrl}>
            <YouTubeIcon className="youTubeIcon" />
            Watch Trailer
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
