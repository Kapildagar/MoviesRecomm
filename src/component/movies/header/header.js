import React from "react";
import { Link } from "react-router-dom";

import "./header.css"
export default function Header() {
  return (
    <>
      <div className="haeder">
        <Link to="/"><img className="img" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="imdbimage" /></Link>
        <Link to="/movies/popular" className="link">Popular</Link>
        <Link to="/movies/upcoming" className="link">Upcoming</Link>
        <Link to="/movies/toprated" className="link">Top rated</Link>
        {/* <div className="search" style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <input type="text" name="search" />
          <button style={{
            background: "white",
            outline: "none",
            border: "none",
            borderLeft: "white"
          }}><i class="fa-sharp fa-solid fa-magnifying-glass" style={{
            color: "black",
            width: "23px",
            height: "24px",
            display: "flex",
            fontSize: "20px",
            padding: "1px"
          }}></i></button>
        </div>*/}
      </div> 

    </>
  )
}